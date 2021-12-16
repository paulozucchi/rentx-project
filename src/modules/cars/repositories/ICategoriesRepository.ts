import { Category } from "../model/Category";

interface ICategoriesModelDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  create({ name, description }): ICategoriesModelDTO;
  findByName(name: string): Category;
  list(): Category[];
}
export { ICategoriesModelDTO, ICategoriesRepository };
