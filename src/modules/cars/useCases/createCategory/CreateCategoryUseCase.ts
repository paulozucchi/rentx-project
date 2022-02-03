import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface ICategory {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) { }

  async execute({ name, description }: ICategory): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name
    );

    if (categoryAlreadyExists) {
      throw new Error("Category already exists!");
    }

    await this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
