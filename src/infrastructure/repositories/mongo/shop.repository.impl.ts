import { ShopDataSource } from "../../../domain/datasources";
import { CreateShopDto } from "../../../domain/dtos";
import { ShopEntity } from "../../../domain/entities";
import { ShopRepository } from "../../../domain/repositories";

export class ShopRepositoryImpl implements ShopRepository {
    constructor(
        private readonly shopDataSource: ShopDataSource
      ) {
        
      }
    createShop(createShopDto: CreateShopDto): Promise<ShopEntity> {
        return this.shopDataSource.createShop(createShopDto)
    }

}