import { Router } from "express";

import { SpecificationsRepository } from "../modules/cars/repositories/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationsRouter = Router();

const specificationsRepository = new SpecificationsRepository();

specificationsRouter.post("/", (request, response) => {
  const { name, description } = request.body;

  const specificationsService = new CreateSpecificationService(
    specificationsRepository
  );

  specificationsService.execute({ name, description });

  return response.status(201).send();
});

export { specificationsRouter };
