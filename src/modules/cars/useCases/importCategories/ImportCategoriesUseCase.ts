import { parse } from "csv-parse";
import fs from "fs";
import { inject, injectable } from "tsyringe";

import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface ICategoriesImported {
  name: string;
  description: string;
}

@injectable()
class ImportCategoriesUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) { }
  loadCategories(file: Express.Multer.File): Promise<ICategoriesImported[]> {
    return new Promise((resolve, reject) => {
      const categoriesImported: ICategoriesImported[] = [];
      const parseFile = parse();

      fs.createReadStream(file.path).pipe(parseFile);

      parseFile
        .on("data", async (line) => {
          const [name, description] = line;
          categoriesImported.push({
            name,
            description,
          });
        })
        .on("end", () => {
          fs.promises.unlink(file.path); // remove o arquivo após importado
          resolve(categoriesImported);
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }
  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);
    categories.map(async (category) => {
      const { name, description } = category;
      const categoryIsExists = await this.categoriesRepository.findByName(name);
      if (!categoryIsExists) {
        await this.categoriesRepository.create({
          name,
          description,
        });
      }
    });
  }
}
export { ImportCategoriesUseCase };
