import { Request, Response } from "express";
import { container } from "tsyringe";
import { RemoveAddressressService } from "./removeAddressService";

class RemoveAddressController {
  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { _id } = res.locals.user;
      const { idAddress } = req.params;
      const removeAddressService = container.resolve(RemoveAddressressService);
      await removeAddressService.execute(_id, idAddress);
      return res.sendStatus(204);
    } catch (err: any) {
      return res.status(500).send(err.message);
    }
  }
}

export default new RemoveAddressController();
