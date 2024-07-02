import { ProductModel } from "../../../data/mongodb";
import { ProductDataSource } from "../../../domain/datasources";
import { CreateProductDto, FilterGetProductsDto } from "../../../domain/dtos";
import { ProductEntity } from "../../../domain/entities/product.entity";
import { CustomError } from "../../../domain/errors";
import { upsertObject } from "./constants";

export class MongoProductDataSourceImpl implements ProductDataSource {
    async createProduct(createProductDto: CreateProductDto): Promise<ProductEntity> {
        try {
            const { name } = createProductDto
            const newProduct = await ProductModel.findOneAndUpdate
            (
                { name }, 
                createProductDto, 
                upsertObject
            )
            console.log(newProduct);
            
            return ProductEntity.fromObject(newProduct!)
        } catch (error) {
            console.log({error});
            
            if (error instanceof CustomError) {
                throw error
            }
            throw CustomError.internalServer()
        }
    }
    async getProducts(filter?: FilterGetProductsDto | undefined): Promise<ProductEntity[]> {
        try {
            const products = await ProductModel.find(filter || {})
            console.log({ length: products.length });

            return products.map(product => ProductEntity.fromObject(product))
        } catch (error) {
            if (error instanceof CustomError) {
                throw error
            }
            throw CustomError.internalServer()
        }

    }

}