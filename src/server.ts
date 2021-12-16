import express from "express";

import { categoriesRoutes } from "./routes/categories.routes";
import { specificationsRouter } from "./routes/specifications.routes";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationsRouter);

const port = 3333;

app.listen(port, () => console.log(`Server is runing on port ${port}`));
