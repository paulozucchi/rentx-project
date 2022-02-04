import express from "express";
import swaggerUi from "swagger-ui-express";

import "./database";

import "./shared/container";

import { router } from "./routes";
import swaggerDoc from "./swagger.json";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use(router);

const port = 3333;

app.listen(port, () => console.log(`Server is runing on port ${port}`));
