import { UpdateCategoryDto } from "../../dtos";
import { CategoryEntity } from "../../entities";
import { CategoryRepository } from "../../repositories";

interface UpdateCategoryUseCase {
    execute(id: string, updateCategoryDto: UpdateCategoryDto): Promise<CategoryEntity>
}

export class UpdateCategory implements UpdateCategoryUseCase {
    constructor(
        private readonly categoryRepository: CategoryRepository,

    ) { }
    execute(id: string, updateCategoryDto: UpdateCategoryDto): Promise<CategoryEntity> {
        const updatedCategory = this.categoryRepository.updateCategory(id, updateCategoryDto)

        return updatedCategory
    }

}