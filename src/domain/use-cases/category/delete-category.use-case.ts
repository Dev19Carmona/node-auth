import { UpdateCategoryDto } from "../../dtos";
import { CategoryEntity } from "../../entities";
import { CategoryRepository } from "../../repositories";

interface DeleteCategoryUseCase {
    execute(id: string, updateCategoryDto: UpdateCategoryDto): Promise<CategoryEntity>
}

export class DeleteCategory implements DeleteCategoryUseCase {
    constructor(
        private readonly categoryRepository: CategoryRepository,

    ) { }
    execute(id: string, updateCategoryDto: UpdateCategoryDto): Promise<CategoryEntity> {
        const deletedCategory = this.categoryRepository.updateCategory(id, updateCategoryDto)

        return deletedCategory
    }

}