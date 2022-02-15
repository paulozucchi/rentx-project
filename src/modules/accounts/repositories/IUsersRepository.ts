import { User } from "../infra/typeorm/entities/User";

interface ICreateUserDTO {
  name: string;
  password: string;
  email: string;
  driver_license: string;
  id?: string;
  avatar?: string;
}
interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findByEmail(name: string): Promise<User>;
  findById(id: string): Promise<User>;
}

export { ICreateUserDTO, IUsersRepository };
