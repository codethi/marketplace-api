import "express-async-errors";
import "reflect-metadata";
import "@/helpers/container";
import express, { json, Express } from "express";
import cors from "cors";
import ConnectToMongoDb from "@/database";
import router from "@/routes";
import errorMiddleware from "@/middlewares/errorMiddleware";
import loadEnvs from "@/helpers/env";

loadEnvs();
const app = express();

app.use(json());
app.use(cors());
app.use(router);
app.use(errorMiddleware.execute);

export async function init(): Promise<Express> {
  await ConnectToMongoDb.execute();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await ConnectToMongoDb.disconnect();
}

export default app;
