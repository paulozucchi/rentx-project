import { Category } from "../model/Category";

interface ICategoriesModelDTO {
  name: string;
  description: string;
}

class CategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
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
