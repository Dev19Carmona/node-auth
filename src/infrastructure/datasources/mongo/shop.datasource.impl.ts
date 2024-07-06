import { ShopModel } from "../../../data/mongodb";
import { ShopDataSource } from "../../../domain/datasources";
import { CreateShopDto } from "../../../domain/dtos";
import { ShopEntity } from "../../../domain/entities";
import { CustomError } from "../../../domain/errors";
import { upsertObject } from "./constants";

export class MongoShopDataSourceImpl implements ShopDataSource {
    getShop(_idCompany: string): Promise<ShopEntity[]> {
        throw new Error("Method not implemented.");
    }

    async createShop(createShopDto: CreateShopDto): Promise<ShopEntity> {
        try {
            const { name } = createShopDto
            const newShop = await ShopModel.findOneAndUpdate({ name }, createShopDto, upsertObject)
            console.log({newShop})
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