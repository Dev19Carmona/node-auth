import { ProductModel } from "../../../data/mongodb";
import { ProductDataSource } from "../../../domain/datasources";
import { FilterGetProductsDto } from "../../../domain/dtos";
import { ProductEntity } from "../../../domain/entities/product.entity";
import { CustomError } from "../../../domain/errors";

export class MongoProductDataSourceImpl implements ProductDataSource {
    async getProducts(filter?: FilterGetProductsDto | undefined): Promise<ProductEntity[]> {
        try {
            const products = await ProductModel.find(filter || {})
            return products.map(product => ProductEntity.fromObject(product))
        } catch (error) {
            if (error instanceof CustomError) {
                throw error
            }
            throw CustomError.internalServer()
        }

    }

}