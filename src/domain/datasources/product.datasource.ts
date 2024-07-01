
import { FilterGetProductsDto } from "../dtos";
import { ProductEntity } from "../entities/product.entity";

export abstract class ProductDataSource {
    abstract getProducts(filter?:FilterGetProductsDto):Promise<ProductEntity[]>
}