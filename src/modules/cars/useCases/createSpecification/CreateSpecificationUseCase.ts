import { inject, injectable } from "tsyringe";

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
      throw new Error("Specification already exists!");
    }
    await this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
