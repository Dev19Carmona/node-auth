import { FilterGetProductsDto } from "../../dtos";
import { ProductEntity } from "../../entities";
import { ProductRepository } from "../../repositories";

interface GetProductsUseCase {
    execute(filterGetProductsDto: FilterGetProductsDto): Promise<ProductEntity[]>
}

export class GetProducts implements GetProductsUseCase {
    constructor(
        private readonly productRepository: ProductRepository,
      ) {}
    execute(filterGetProductsDto: FilterGetProductsDto): Promise<ProductEntity[]> {
        return this.productRepository.getProducts(filterGetProductsDto)
    }
    
}