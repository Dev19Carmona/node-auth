
import { CategoryEntity } from "../../entities";
import { CategoryRepository } from "../../repositories";

interface GetCategoryUseCase {
    execute(): Promise<CategoryEntity[]>
}

export class GetCategory implements GetCategoryUseCase {
    constructor(
        private readonly categoryRepository: CategoryRepository,
      ) {}
    execute(): Promise<CategoryEntity[]> {
        return this.categoryRepository.getCategory()
    }
    
}