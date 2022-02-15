import { inject, injectable } from "tsyringe";

import { Specifications } from "../../infra/typeorm/entities/Specifications";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

@injectable()
class ListSpecificationsUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationsRepository: ISpecificationsRepository
  ) { }

  async execute(): Promise<Specifications[]> {
    const specifications = this.specificationsRepository.list();
    return specifications;
  }
}

export { ListSpecificationsUseCase };
