import express, { json } from "express";
import cors from "cors";
import ConnectToMongoDb from "database";

const app = express();
app.use(json());
app.use(cors());
ConnectToMongoDb.execute();

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running in port: ${port}`));
