import { ProductDataSource } from "../../../domain/datasources";
import { FilterGetProductsDto } from "../../../domain/dtos";
import { ProductEntity } from "../../../domain/entities/product.entity";
import { ProductRepository } from "../../../domain/repositories";

export class ProductRepositoryImpl implements ProductRepository {
    constructor(
        private readonly productDataSource: ProductDataSource
      ) {
        
      }
    getProducts(filter?: FilterGetProductsDto | undefined): Promise<ProductEntity[]> {
        return this.productDataSource.getProducts(filter)
    }
    
}