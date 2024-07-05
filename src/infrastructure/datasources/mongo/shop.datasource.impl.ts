import { ShopModel } from "../../../data/mongodb";
import { ShopDataSource } from "../../../domain/datasources";
import { CreateShopDto } from "../../../domain/dtos";
import { ShopEntity } from "../../../domain/entities";
import { CustomError } from "../../../domain/errors";
import { upsertObject } from "./constants";

export class MongoShopDataSourceImpl implements ShopDataSource {

    async createShop(createShopDto: CreateShopDto): Promise<ShopEntity> {
        try {
            const { name } = createShopDto
            const newShop = await ShopModel.findByIdAndUpdate({ name }, createShopDto, upsertObject)
            if (!newShop) throw new Error('')
            return ShopEntity.fromObject(newShop)
        } catch (error) {
            console.log({ error });

            if (error instanceof CustomError) {
                throw error
            }
            throw CustomError.internalServer()
        }
    }

}