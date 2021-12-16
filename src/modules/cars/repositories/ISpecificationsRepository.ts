interface ISpecificationsDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ISpecificationsDTO): void;
}

export { ISpecificationsRepository, ISpecificationsDTO };
