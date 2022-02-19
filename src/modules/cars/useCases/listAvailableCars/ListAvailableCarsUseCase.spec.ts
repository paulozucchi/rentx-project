import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let carsRepository: CarsRepositoryInMemory;
let listAvailableCarsUseCase: ListAvailableCarsUseCase;
describe("List Cars", () => {
  beforeEach(() => {
    carsRepository = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(carsRepository);
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

    const cars = await listAvailableCarsUseCase.execute({});
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

    const cars = await listAvailableCarsUseCase.execute({ brand: car.brand });
    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepository.create({
      name: "Car99",
      description: "description test",
      daily_rate: 100,
      license_plate: "ASD-1321",
      fine_amount: 20,
      brand: "brand2",
      category_id: "category_id",
    });

    const cars = await listAvailableCarsUseCase.execute({ name: car.name });
    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by category id", async () => {
    const car = await carsRepository.create({
      name: "Car2",
      description: "description test",
      daily_rate: 100,
      license_plate: "ASD-1321",
      fine_amount: 20,
      brand: "brand2",
      category_id: "321321",
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: car.category_id,
    });
    expect(cars).toEqual([car]);
  });
});
