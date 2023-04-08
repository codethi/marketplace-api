import { Router } from "express";
import authMiddleware from "../../middlewares/authMiddleware";
import validateSchemma from "../../middlewares/schemaValidationMiddleware";
import createOrderController from "modules/Orders/useCases/createOrder/createOrderController";
import { orderSchemmaJoi } from "modules/Orders/schemas/OrderSchemaJoi";
import paginationMiddleware from "middlewares/paginationMiddleware";
import findAllOrdersController from "modules/Orders/useCases/findAllOrders/findAllOrdersController";
import findByIdOrderController from "modules/Orders/useCases/findByIdOrder/findByIdOrderController";
import removeOrderController from "modules/Orders/useCases/removeOrder/removeOrderController";

const orderRoutes = Router();

orderRoutes.use(authMiddleware.execute);

orderRoutes.post(
  "/",
  validateSchemma.execute(orderSchemmaJoi),
  createOrderController.handle
);
orderRoutes.get(
  "/",
  paginationMiddleware.execute,
  findAllOrdersController.handle
);
orderRoutes.get("/:id", findByIdOrderController.handle);
orderRoutes.delete("/:id", removeOrderController.handle);

export default orderRoutes;
