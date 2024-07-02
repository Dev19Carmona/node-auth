
import { CreateProductDto, FilterGetProductsDto } from "../dtos";
import { ProductEntity } from "../entities/product.entity";

export abstract class ProductRepository {
    abstract getProducts(filter?:FilterGetProductsDto):Promise<ProductEntity[]>
    abstract createProduct(createProductDto: CreateProductDto):Promise<ProductEntity>

}