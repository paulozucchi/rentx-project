import { User } from "../../../entities/User";
import { ICreateUserDTO, IUsersRepository } from "../../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {
  usersRepository: User[] = [];
  async create({
    driver_license,
    email,
    name,
    password,
  }: ICreateUserDTO): Promise<void> {
    const newUser = new User();
    Object.assign(newUser, {
      driver_license,
      email,
      name,
      password,
    });
    this.usersRepository.push(newUser);
  }
  async findById(id: string): Promise<User> {
    return this.usersRepository.find((user) => user.id === id);
  }
  async findByEmail(name: string): Promise<User> {
    return this.usersRepository.find((user) => user.email === name);
  }
}

export { UsersRepositoryInMemory };
