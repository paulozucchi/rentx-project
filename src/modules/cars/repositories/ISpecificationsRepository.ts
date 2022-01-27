import { Specifications } from "../model/Specifications";

interface ISpecificationsDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ISpecificationsDTO): void;
  findByName(name: string): Specifications;
}

export { ISpecificationsRepository, ISpecificationsDTO };
