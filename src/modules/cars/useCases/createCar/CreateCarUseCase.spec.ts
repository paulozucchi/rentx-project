import { AppError } from "../../../../shared/errors/AppError";
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
    const car = await createCarUseCase.execute({
      name: "Car test",
      description: "description test",
      daily_rate: 100,
      license_plate: "ASD-1321",
      fine_amount: 20,
      brand: "brand test",
      category_id: "category_id",
    });
    expect(car).toHaveProperty("id");
  });

  it("should be not able to create a new car with a exists license plate", async () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: "Car1",
        description: "description test",
        daily_rate: 100,
        license_plate: "ASD-1321",
        fine_amount: 20,
        brand: "brand test",
        category_id: "category_id",
      });
      await createCarUseCase.execute({
        name: "Car2",
        description: "description test",
        daily_rate: 100,
        license_plate: "ASD-1321",
        fine_amount: 20,
        brand: "brand test",
        category_id: "category_id",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should be able to create a new car with available true", async () => {
    const car = await createCarUseCase.execute({
      name: "Car available",
      description: "description test",
      daily_rate: 100,
      license_plate: "XXX-1321",
      fine_amount: 20,
      brand: "brand test",
      category_id: "category_id",
    });

    expect(car.available).toBe(true);
  });
});
