import { AppError } from "../../../../shared/errors/AppError";
import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase";

let carsRepositoryInMemory: CarsRepositoryInMemory;
let createCarSpecificationUseCase: CreateCarSpecificationUseCase;

describe("Create car specifications", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
      carsRepositoryInMemory
    );
  });
  it("should be able to add a new specification to a car", async () => {
    expect(async () => {
      const car_id = "asdf321";
      const specification_id = ["65dfsadf"];
      await createCarSpecificationUseCase.execute({ car_id, specification_id });
    }).rejects.toBeInstanceOf(AppError);
  });
  it("should be able to add a new specification to a car", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "CarX",
      description: "description test",
      daily_rate: 100,
      license_plate: "ASD-1399",
      fine_amount: 20,
      brand: "brand test",
      category_id: "category_id",
    });

    const specification_id = ["65dfsadf"];
    await createCarSpecificationUseCase.execute({
      car_id: car.id,
      specification_id,
    });
  });
});
