import { CreateShopDto } from "../dtos";
import { ShopEntity } from "../entities";

export abstract class ShopRepository {
    abstract createShop(createShopDto:CreateShopDto):Promise<ShopEntity>
    abstract getShop(_idCompany: string):Promise<ShopEntity[]>
}