import { ProductDataSource } from "../../../domain/datasources";
import { FilterGetProductsDto, CreateProductDto } from "../../../domain/dtos";
import { ProductEntity } from "../../../domain/entities";

export class PostgressProductDataSourceImpl implements ProductDataSource{
    getProducts(filter?: FilterGetProductsDto): Promise<ProductEntity[]> {
        throw new Error("Method not implemented.");
    }
    createProduct(createProductDto: CreateProductDto): Promise<ProductEntity> {
        
        throw new Error("Method not implemented.");
    }

}