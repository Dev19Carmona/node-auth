import { CreateProductDto } from "../../dtos";
import { ProductEntity } from "../../entities";
import { ProductRepository } from "../../repositories";

interface CreateProductUseCase {
    execute(createProductDto: CreateProductDto): Promise<ProductEntity>
}

export class CreateProduct implements CreateProductUseCase {
    constructor(
        private readonly productRepository: ProductRepository,
      ) {}
    execute(createProductDto: CreateProductDto): Promise<ProductEntity> {
        return this.productRepository.createProduct(createProductDto)
    }
    
}