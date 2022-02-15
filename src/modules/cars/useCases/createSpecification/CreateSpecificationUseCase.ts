import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import {
  ISpecificationsDTO,
  ISpecificationsRepository,
} from "../../repositories/ISpecificationsRepository";

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationsRepository: ISpecificationsRepository
  ) { }

  async execute({ name, description }: ISpecificationsDTO): Promise<void> {
    const specificationAlreadyExists =
      await this.specificationsRepository.findByName(name);
    if (specificationAlreadyExists) {
      throw new AppError("Specification already exists!");
    }
    await this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
