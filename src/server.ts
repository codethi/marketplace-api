import express, { json } from "express";
import cors from "cors";
import ConnectToMongoDb from "database";
import router from "routes";

const app = express();
ConnectToMongoDb.execute();

app.use(json());
app.use(cors());
app.use(router);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running in port: ${port}`));
