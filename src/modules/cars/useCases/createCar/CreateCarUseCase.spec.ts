import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });
  it("should be able to create a new car", async () => {
    await createCarUseCase.execute({
      name: "Car test",
      description: "description test",
      daily_rate: 100,
      license_plate: "ASD-1321",
      fine_amount: 20,
      brand: "brand test",
      category_id: "category_id",
    });
  });
});
