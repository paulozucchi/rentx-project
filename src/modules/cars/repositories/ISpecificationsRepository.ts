import { Specifications } from "../infra/typeorm/entities/Specifications";

interface ISpecificationsDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ISpecificationsDTO): Promise<Specifications>;
  findByName(name: string): Promise<Specifications>;
  list(): Promise<Specifications[]>;
  findByIds(ids: string[]): Promise<Specifications[]>;
}

export { ISpecificationsRepository, ISpecificationsDTO };
