import { AppError } from "../../../../errors/AppError";
import { CategoriesRepositoryInMemory } from "../../repositories/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe("Create category", () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoryInMemory
    );
  });
  it("should be able to create a new category", async () => {
    const category = {
      name: "Category test",
      description: "Description test",
    };
    await createCategoryUseCase.execute({
      name: "Category test",
      description: "Description test",
    });
    const verifyCategory = await categoriesRepositoryInMemory.findByName(
      category.name
    );
    expect(verifyCategory).toHaveProperty("id");
  });

  it("should not be able to create a new category with name exists", async () => {
    expect(async () => {
      await createCategoryUseCase.execute({
        name: "Category test",
        description: "Description test",
      });
      await createCategoryUseCase.execute({
        name: "Category test",
        description: "Description test",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
