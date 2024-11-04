import { CategoryDataSource } from "../../../domain/datasources";
import { CreateCategoryDto, UpdateCategoryDto } from "../../../domain/dtos";
import { CategoryEntity } from "../../../domain/entities";
import { CategoryRepository } from "../../../domain/repositories";

export class MongoCategoryRepositoryImpl implements CategoryRepository {
    constructor(
        private readonly roleDataSource: CategoryDataSource
    ) {

    }
    activeCategory(id: string, updateCategoryDto: UpdateCategoryDto): Promise<CategoryEntity> {
        return this.roleDataSource.activeCategory(id, updateCategoryDto)
    }
    deleteCategory(id: string, updateCategoryDto: UpdateCategoryDto): Promise<CategoryEntity> {
        return this.roleDataSource.deleteCategory(id, updateCategoryDto)
    }
    updateCategory(id: string, updateCategoryDto: UpdateCategoryDto): Promise<CategoryEntity> {
        return this.roleDataSource.updateCategory(id, updateCategoryDto)
    }
    getCategory(): Promise<CategoryEntity[]> {
        return this.roleDataSource.getCategory()
    }
    createCategory(createCategoryDto: CreateCategoryDto): Promise<CategoryEntity> {
        return this.roleDataSource.createCategory(createCategoryDto)
    }

}