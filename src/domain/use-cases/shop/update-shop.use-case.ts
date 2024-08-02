import { UpdateShopDto } from "../../dtos";
import { ShopEntity } from "../../entities";
import { ShopRepository } from "../../repositories";

interface UpdateShopUseCase {
    execute(id: string, updateShopDto: UpdateShopDto): Promise<ShopEntity>
}

export class UpdateShop implements UpdateShopUseCase {
    constructor(
        private readonly shopRepository: ShopRepository,
    ) {}
    execute(id: string, updateShopDto: UpdateShopDto): Promise<ShopEntity> {
        return this.shopRepository.updateShop(id, updateShopDto);
    }
}