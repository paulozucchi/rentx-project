import { Specifications } from "../../entities/Specifications";
import {
  ISpecificationsDTO,
  ISpecificationsRepository,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications;

  private static INSTANCE;

  private constructor() {
    this.specifications = [];
  }

  public static getInstance() {
    if (!this.INSTANCE) {
      this.INSTANCE = new SpecificationsRepository();
    }
    return this.INSTANCE;
  }

  create({ name, description }: ISpecificationsDTO): void {
    const specification = new Specifications();

    Object.assign(specification, { name, description, created_at: new Date() });

    this.specifications.push(specification);
  }
  findByName(name: string): Specifications {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    );
    return specification;
  }
  list(): Specifications[] {
    return this.specifications;
  }
}

export { SpecificationsRepository };
