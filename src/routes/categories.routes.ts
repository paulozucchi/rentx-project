import { Router } from "express";

import { Category } from "../model/Category";

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const newCategory = new Category();

  Object.assign(newCategory, { name, description, created_at: new Date() });

  categories.push(newCategory);
  return response.json(newCategory);
});

export { categoriesRoutes };
