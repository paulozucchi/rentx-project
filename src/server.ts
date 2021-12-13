import express from "express";

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  return response.send("ok");
});

const port = 3333;

app.listen(port, () => console.log(`Server is runing on port ${port}`));
