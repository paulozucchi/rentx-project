import { Specifications } from "../../infra/typeorm/entities/Specifications";
import {
  ISpecificationsDTO,
  ISpecificationsRepository,
} from "../ISpecificationsRepository";

class SpecificationsRepositoryInMemory implements ISpecificationsRepository {
  specifications: Specifications[] = [];
  async create({
    name,
    description,
  }: ISpecificationsDTO): Promise<Specifications> {
    const specification = new Specifications();
    Object.assign(this.specifications, {
      name,
      description,
    });
    this.specifications.push(specification);
    return specification;
  }
  async findByName(name: string): Promise<Specifications> {
    const specificationFinded = this.specifications.find(
      (specification) => specification.name === name
    );
    return specificationFinded;
  }
  async list(): Promise<Specifications[]> {
    return this.specifications;
  }
  async findByIds(ids: string[]): Promise<Specifications[]> {
    const specificationsFiltered = this.specifications.filter((specification) =>
      ids.includes(specification.id)
    );
    return specificationsFiltered;
  }
}

export { SpecificationsRepositoryInMemory };
