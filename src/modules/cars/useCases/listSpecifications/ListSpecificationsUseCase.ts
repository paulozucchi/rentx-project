import { Specifications } from "../../model/Specifications";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

class ListSpecificationsUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) { }

  execute(): Specifications[] {
    return this.specificationsRepository.list();
  }
}

export { ListSpecificationsUseCase };
