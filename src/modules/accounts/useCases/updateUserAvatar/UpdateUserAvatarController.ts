import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateUserAvatarUseCase } from "./UpdateUserAvatarUseCase";

class UpdateUserAvatarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const avatar_path = request.file.filename;
    const updateUserAvatarUserCase = container.resolve(UpdateUserAvatarUseCase);
    updateUserAvatarUserCase.execute({ user_id: id, avatar_path });
    return response.status(204).send();
  }
}

export { UpdateUserAvatarController };
