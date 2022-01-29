import {
  ISpecificationsDTO,
  ISpecificationsRepository,
} from "../../repositories/ISpecificationsRepository";

class CreateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) { }

  execute({ name, description }: ISpecificationsDTO) {
    const specificationAlreadyExists =
      this.specificationsRepository.findByName(name);
    if (specificationAlreadyExists) {
      throw new Error("Specification already exists!");
    }
    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
