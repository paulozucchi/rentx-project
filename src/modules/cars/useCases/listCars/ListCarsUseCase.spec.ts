import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { ListCarsUseCase } from "./ListCarsUseCase";

let carsRepository: CarsRepositoryInMemory;
let listCarsUseCase: ListCarsUseCase;
describe("List Cars", () => {
  beforeEach(() => {
    carsRepository = new CarsRepositoryInMemory();
    listCarsUseCase = new ListCarsUseCase(carsRepository);
  });
  it("should be able to list all available cars", async () => {
    const car = await carsRepository.create({
      name: "Car1",
      description: "description test",
      daily_rate: 100,
      license_plate: "ASD-1321",
      fine_amount: 20,
      brand: "brand test",
      category_id: "category_id",
    });

    const cars = await listCarsUseCase.execute({});
    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepository.create({
      name: "Car2",
      description: "description test",
      daily_rate: 100,
      license_plate: "ASD-1321",
      fine_amount: 20,
      brand: "brand2",
      category_id: "category_id",
    });

    const cars = await listCarsUseCase.execute({ brand: car.brand });
    expect(cars).toEqual([car]);
  });
});
