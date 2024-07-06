import { ShopDataSource } from "../../../domain/datasources";
import { CreateShopDto } from "../../../domain/dtos";
import { ShopEntity } from "../../../domain/entities";
import { ShopRepository } from "../../../domain/repositories";

export class ShopRepositoryImpl implements ShopRepository {
    constructor(
        private readonly shopDataSource: ShopDataSource
      ) {
        
      }
    getShop(_idCompany: string): Promise<ShopEntity[]> {
        throw new Error("Method not implemented.");
    }
    createShop(createShopDto: CreateShopDto): Promise<ShopEntity> {
        return this.shopDataSource.createShop(createShopDto)
    }

}