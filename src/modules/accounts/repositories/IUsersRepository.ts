import { User } from "../entities/User";

interface ICreateUserDTO {
  name: string;
  password: string;
  email: string;
  driver_license: string;
}
interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByEmail(name: string): Promise<User>;
}

export { ICreateUserDTO, IUsersRepository };
