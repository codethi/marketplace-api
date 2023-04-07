import { Router } from "express";
import authMiddleware from "../../middlewares/authMiddleware";
import validateSchemma from "../../middlewares/schemaValidationMiddleware";
import createOrderController from "modules/Orders/useCases/createOrder/createOrderController";
import { orderSchemmaJoi } from "modules/Orders/schemas/OrderSchemaJoi";

const orderRoutes = Router();

orderRoutes.use(authMiddleware.execute);

orderRoutes.post(
  "/",
  validateSchemma.execute(orderSchemmaJoi),
  createOrderController.handle
);

export default orderRoutes;
