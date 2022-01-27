import { Category } from "../../model/Category";
import {
  ICategoriesModelDTO,
  ICategoriesRepository,
} from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  // eslint-disable-next-line no-use-before-define
  private static INSTANCE: CategoriesRepository;

  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoriesRepository {
    if (!this.INSTANCE) {
      this.INSTANCE = new CategoriesRepository();
    }
    return this.INSTANCE;
  }

  create({ name, description }: ICategoriesModelDTO): Category {
    const newCategory = new Category();

    Object.assign(newCategory, { name, description, created_at: new Date() });

    this.categories.push(newCategory);
    return newCategory;
  }
  findByName(name: string): Category {
    return this.categories.find((category) => category.name === name);
  }
  list(): Category[] {
    return this.categories;
  }
}

export { CategoriesRepository };
