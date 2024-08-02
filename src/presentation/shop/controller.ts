import { Request, Response } from 'express';
import { CreateShopDto, UpdateShopDto } from '../../domain/dtos';
import { ShopRepository } from '../../domain/repositories';
import { CustomError } from '../../domain/errors';
import { CreateShop, GetShops, UpdateShop, DeleteShop } from '../../domain/use-cases';

export class ShopController {
  constructor(private readonly shopRepository: ShopRepository) { }

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }
    return res.status(500).json({ error: '¡Internal Server Error!' });
  }

  createShop = (req: Request, res: Response) => {
    const [error, createShopDto] = CreateShopDto.create(req.body);
    if (error) return res.status(400).json({ error });
    const createShopUseCase = new CreateShop(this.shopRepository);
    createShopUseCase.execute(createShopDto!)
      .then((newShop) => res.json(newShop))
      .catch((err) => this.handleError(err, res));
  }

  getShops = (_req: Request, res: Response) => {
    const getShopsUseCase = new GetShops(this.shopRepository);
    getShopsUseCase.execute()
      .then((shops) => res.json(shops))
      .catch((err) => this.handleError(err, res));
  }

  updateShop = (req: Request, res: Response) => {
    const { id } = req.params;
    const [error, updateShopDto] = UpdateShopDto.create(req.body);
    if (error) return res.status(400).json({ error });
    const updateShopUseCase = new UpdateShop(this.shopRepository);
    updateShopUseCase.execute(id, updateShopDto!)
      .then((updatedShop) => res.json(updatedShop))
      .catch((err) => this.handleError(err, res));
  }

  deleteShop = (req: Request, res: Response) => {
    const { id } = req.params;
    const deleteShopUseCase = new DeleteShop(this.shopRepository);
    deleteShopUseCase.execute(id)
      .then((deletedShop) => res.json(deletedShop))
      .catch((err) => this.handleError(err, res));
  }
}
