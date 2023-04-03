import { Request, Response } from "express";
import { container } from "tsyringe";
import { SigninService } from "./signinService";

class SigninController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const body = req.body;
      const signinService = container.resolve(SigninService);
      const token = await signinService.execute(body);
      return res.send({ token });
    } catch (err: any) {
      return res.status(500).send(err.message);
    }
  }
}

export default new SigninController();
