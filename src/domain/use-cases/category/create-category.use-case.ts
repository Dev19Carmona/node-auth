import { CreateCategoryDto } from "../../dtos";
import { CategoryEntity } from "../../entities";
import { CategoryRepository } from "../../repositories";

interface CreateCategoryUseCase {
    execute(createCategoryDto: CreateCategoryDto): Promise<CategoryEntity>
}

export class CreateCategory implements CreateCategoryUseCase {
    constructor(
        private readonly categoryRepository: CategoryRepository,
        
      ) {}
    execute(createCategoryDto: CreateCategoryDto): Promise<CategoryEntity> {
        const newCategory = this.categoryRepository.createCategory(createCategoryDto)

        return newCategory
    }
    
}