import { ShopDataSource } from "../../../domain/datasources";
import { CreateShopDto, UpdateShopDto } from "../../../domain/dtos";
import { ShopEntity } from "../../../domain/entities";
import { ShopRepository } from "../../../domain/repositories";

export class ShopRepositoryImpl implements ShopRepository {
    constructor(
        private readonly shopDataSource: ShopDataSource
      ) {
        
      }
    getShop(): Promise<ShopEntity[]> {
        return this.shopDataSource.getShop()
    }
    updateShop(id: string, updateShopDto: UpdateShopDto): Promise<ShopEntity> {
        return this.shopDataSource.updateShop(id,updateShopDto)
    }
    deleteShop(id: string): Promise<ShopEntity> {
        return this.shopDataSource.deleteShop(id)
    }
    createShop(createShopDto: CreateShopDto): Promise<ShopEntity> {
        return this.shopDataSource.createShop(createShopDto)
    }

}