import {
  ISpecificationsDTO,
  ISpecificationsRepository,
} from "../repositories/ISpecificationsRepository";

class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationsRepository) { }
  execute({ name, description }: ISpecificationsDTO) {
    this.specificationsRepository.create({ name, description });
  }
}
export { CreateSpecificationService };
