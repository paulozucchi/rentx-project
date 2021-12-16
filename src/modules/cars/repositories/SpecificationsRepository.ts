import { Specifications } from "../model/Specifications";
import {
  ISpecificationsDTO,
  ISpecificationsRepository,
} from "./ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications;
  constructor() {
    this.specifications = [];
  }
  create({ name, description }: ISpecificationsDTO): void {
    const specification = new Specifications();

    Object.assign(specification, { name, description });

    this.specifications.push(specification);
  }
}

export { SpecificationsRepository };
