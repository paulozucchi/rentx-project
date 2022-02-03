import { Category } from "../entities/Category";

interface ICategoriesModelDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  create({ name, description }): Promise<ICategoriesModelDTO>;
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
}
export { ICategoriesModelDTO, ICategoriesRepository };
