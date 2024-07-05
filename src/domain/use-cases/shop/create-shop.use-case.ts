import { CreateShopDto } from "../../dtos";
import { ProductEntity, ShopEntity } from "../../entities";
import { ProductRepository, ShopRepository } from "../../repositories";

interface CreateShopUseCase {
    execute(CreateShopDto: CreateShopDto): Promise<ShopEntity>
}

export class CreateShop implements CreateShopUseCase {
    constructor(
        private readonly shopRepository: ShopRepository,
      ) {}
    execute(createShopDto: CreateShopDto): Promise<ShopEntity> {
        return this.shopRepository.createShop(createShopDto)
    }
    
}