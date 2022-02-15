import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";
import {
  ICreateUserDTO,
  IUsersRepository,
} from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }
  async execute({
    name,
    password,
    email,
    driver_license,
  }: ICreateUserDTO): Promise<void> {
    const newPassword = await hash(password, 8);
    const emailExists = await this.usersRepository.findByEmail(email);
    if (emailExists) {
      throw new AppError("Email already exists");
    }
    await this.usersRepository.create({
      name,
      password: newPassword,
      email,
      driver_license,
    });
  }
}

export { CreateUserUseCase };
