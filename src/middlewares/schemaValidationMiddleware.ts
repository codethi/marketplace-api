import { NextFunction, Request, Response } from "express";
import { ConflitError } from "helpers/errors/apiErrors";

class ValidateSchemma {
  execute(schema: any) {
    return (req: Request, res: Response, next: NextFunction) => {
      const { error } = schema.validate(req.body, { abortEarly: false });
      if (error) {
        const errors = error?.details.map((detail: any) => detail.message);
        throw new ConflitError(errors);
      }

      next();
    };
  }
}

export default new ValidateSchemma();
