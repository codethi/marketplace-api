import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import "dotenv/config";
import { container } from "tsyringe";
import { FindByIdService } from "modules/Users/useCases/finById/findByIdService";

interface ITokenPayload extends JwtPayload {
  id: string;
}

class AuthMiddleware {
  execute(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send("Invalid token!");
    const secret = process.env.SECRET_JWT as string;

    const parts = authorization?.split(" ");
    if (!parts.length) return res.status(401).send("Invalid token!");
    if (parts.length !== 2) return res.status(401).send("Invalid token!");

    const [schema, token] = parts;
    if (!/^Bearer$/i.test(schema))
      return res.status(401).send("Invalid token!");

    jwt.verify(token, secret, async (err, decoded) => {
      if (err) return res.status(401).send("Invalid token!");
      if (!decoded) return res.status(401).send("Invalid token!");

      const { id } = decoded as ITokenPayload;

      try {
        const findByIdUserService = container.resolve(FindByIdService);
        const user = await findByIdUserService.execute(id);
        if (!user) return res.status(401).send("Invalid token!");

        res.locals.user = user;

        return next();
      } catch (err: any) {
        return res.status(500).send(err.message);
      }
    });
  }
}

export default new AuthMiddleware();
