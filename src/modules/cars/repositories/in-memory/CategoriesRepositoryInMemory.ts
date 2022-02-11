import { Category } from "../../entities/Category";
import {
  ICategoriesModelDTO,
  ICategoriesRepository,
} from "../ICategoriesRepository";

class CategoriesRepositoryInMemory implements ICategoriesRepository {
  categories: Category[] = [];
  async findByName(name: string): Promise<Category> {
    const category = this.categories.find((category) => category.name === name);
    return category;
  }
  async list(): Promise<Category[]> {
    return this.categories;
  }
  async create({
    name,
    description,
  }: {
    name: any;
    description: any;
  }): Promise<ICategoriesModelDTO> {
    const category = new Category();
    Object.assign(category, {
      name,
      description,
    });
    this.categories.push(category);
    return category;
  }
}
export { CategoriesRepositoryInMemory };
