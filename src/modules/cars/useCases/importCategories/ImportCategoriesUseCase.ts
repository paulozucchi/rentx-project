import { parse } from "csv-parse";
import fs from "fs";

import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface ICategoriesImported {
  name: string;
  description: string;
}

class ImportCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) { }
  loadCategories(file: Express.Multer.File) {
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
      const categoryIsExists = this.categoriesRepository.findByName(name);
      if (!categoryIsExists) {
        this.categoriesRepository.create({
          name,
          description,
        });
      }
    });
  }
}
export { ImportCategoriesUseCase };
