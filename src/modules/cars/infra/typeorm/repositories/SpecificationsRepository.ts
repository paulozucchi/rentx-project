import { getRepository, Repository } from "typeorm";

import {
  ISpecificationsDTO,
  ISpecificationsRepository,
} from "../../../repositories/ISpecificationsRepository";
import { Specifications } from "../entities/Specifications";

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specifications>;

  constructor() {
    this.repository = getRepository(Specifications);
  }

  async create({ name, description }: ISpecificationsDTO): Promise<void> {
    const specification = this.repository.create({
      name,
      description,
    });
    await this.repository.save(specification);
  }
  async findByName(name: string): Promise<Specifications> {
    const specification = await this.repository.findOne({ name });
    return specification;
  }
  async list(): Promise<Specifications[]> {
    const list = await this.repository.find();
    return list;
  }
}

export { SpecificationsRepository };
