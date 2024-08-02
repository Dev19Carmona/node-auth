import { ShopModel } from "../../../data/mongodb";
import { ShopDataSource } from "../../../domain/datasources";
import { CreateShopDto, UpdateShopDto } from "../../../domain/dtos";
import { ShopEntity } from "../../../domain/entities";
import { CustomError } from "../../../domain/errors";
import { upsertObject } from "./constants";

export class MongoShopDataSourceImpl implements ShopDataSource {
    async getShop(): Promise<ShopEntity[]> {
        try {
            const shops = await ShopModel.find();
            return shops.map(shop => ShopEntity.fromObject(shop));
        } catch (error) {
            console.log({ error });

            if (error instanceof CustomError) {
                throw error;
            }
            throw CustomError.internalServer();
        }
    }

    async updateShop(id: string, updateShopDto: UpdateShopDto): Promise<ShopEntity> {
        try {
            const updatedShop = await ShopModel.findByIdAndUpdate(id, {}, { new: true });
            if (!updatedShop) throw new CustomError(404, 'Shop not found');
            return ShopEntity.fromObject(updatedShop);
        } catch (error) {
            console.log({ error });

            if (error instanceof CustomError) {
                throw error;
            }
            throw CustomError.internalServer();
        }
    }

    async deleteShop(id: string): Promise<ShopEntity> {
        try {
            const deletedShop = await ShopModel.findByIdAndUpdate(id, { isActive: false });
            if (!deletedShop) throw new CustomError(404, 'Shop not found');
            return ShopEntity.fromObject(deletedShop);
        } catch (error) {
            console.log({ error });

            if (error instanceof CustomError) {
                throw error;
            }
            throw CustomError.internalServer();
        }
    }

    async createShop(createShopDto: CreateShopDto): Promise<ShopEntity> {
        try {
            const { name } = createShopDto;
            const newShop = await ShopModel.findOneAndUpdate({ name }, createShopDto, upsertObject);
            if (!newShop) throw new Error('Failed to create or update shop');
            return ShopEntity.fromObject(newShop);
        } catch (error) {
            console.log({ error });

            if (error instanceof CustomError) {
                throw error;
            }
            throw CustomError.internalServer();
        }
    }
}
