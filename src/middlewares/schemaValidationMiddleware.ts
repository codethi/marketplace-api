import { NextFunction, Request, Response } from "express";

class ValidateSchemma {
  execute(schema: any) {
    return (req: Request, res: Response, next: NextFunction) => {
      const { error } = schema.validate(req.body, { abortEarly: false });
      if (error) {
        const errors = error?.details.map((detail: any) => detail.message);
        return res.status(409).send(errors);
      }

      next();
    };
  }
}

export default new ValidateSchemma();
