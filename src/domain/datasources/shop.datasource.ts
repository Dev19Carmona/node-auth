import { CreateShopDto, UpdateShopDto } from "../dtos";
import { ShopEntity } from "../entities";

export abstract class ShopDataSource {
    abstract createShop(createShopDto: CreateShopDto): Promise<ShopEntity>
    abstract getShop(): Promise<ShopEntity[]>
    abstract updateShop(id: string, updateShopDto: UpdateShopDto): Promise<ShopEntity>
    abstract deleteShop(id: string): Promise<ShopEntity>
}