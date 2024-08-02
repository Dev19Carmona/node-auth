import { ShopEntity } from "../../entities";
import { ShopRepository } from "../../repositories";

interface DeleteShopUseCase {
    execute(id: string): Promise<ShopEntity>
}

export class DeleteShop implements DeleteShopUseCase {
    constructor(
        private readonly shopRepository: ShopRepository,
    ) {}
    execute(id: string): Promise<ShopEntity> {
        return this.shopRepository.deleteShop(id);
    }
}