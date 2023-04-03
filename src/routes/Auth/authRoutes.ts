import { Router } from "express";
import validationSchema from "middlewares/schemaValidationMiddleware";
import { AuthSchemaJoi } from "modules/Auth/schemas/AuthSchemaJoi";
import signinController from "modules/Auth/useCases/signin/signinController";

const authRouter = Router();

authRouter.post("/signin", validationSchema.execute(AuthSchemaJoi) ,signinController.handle);

export default authRouter;
