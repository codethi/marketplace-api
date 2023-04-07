import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindAvatarUserService } from "./findAvatarUserService";

class FindAvatarUserController {
  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const findAvatarUserService = container.resolve(FindAvatarUserService);
      const user = await findAvatarUserService.execute(id);
      return res.sendFile(user.image);
    } catch (err: any) {
      return res.status(500).send(err.message);
    }
  }
}

export default new FindAvatarUserController();
