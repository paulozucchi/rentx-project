import { parse } from "csv-parse";
import fs from "fs";

class ImportCategoriesUseCase {
  execute(file: any): void {
    const parseFile = parse();

    const stream = fs.createReadStream(file.path).pipe(parseFile);

    parseFile.on("data", async (line: any) => {
      console.log(line);
    });
  }
}
export { ImportCategoriesUseCase };
