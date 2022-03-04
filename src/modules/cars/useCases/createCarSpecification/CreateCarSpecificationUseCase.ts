import { AppError } from "../../../../shared/errors/AppError";
import { ICarsRepository } from "../../repositories/ICarsRepository";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
  car_id: string;
  specification_id: string[];
}

class CreateCarSpecificationUseCase {
  constructor(
    private carsRepository: ICarsRepository,
    private specificationsRepository: ISpecificationsRepository
  ) { }
  async execute({ car_id, specification_id }: IRequest) {
    const carExists = await this.carsRepository.findById(car_id);
    if (!carExists) {
      throw new AppError("Car id not found");
    }
    const specifications =
      this.specificationsRepository.findByIds(specification_id);
    carExists.specifications = specifications;
    await this.carsRepository.create(carExists);
  }
}

export { CreateCarSpecificationUseCase };
