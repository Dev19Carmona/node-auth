import { CreateCategoryDto, UpdateCategoryDto } from "../dtos";
import { CategoryEntity } from "../entities";

export abstract class CategoryDataSource {
    abstract createCategory(createCategoryDto: CreateCategoryDto): Promise<CategoryEntity>
    abstract getCategory(): Promise<CategoryEntity[]>
    abstract updateCategory(id:string,updateCategoryDto: UpdateCategoryDto): Promise<CategoryEntity>
    abstract deleteCategory(id:string, updateCategoryDto: UpdateCategoryDto): Promise<CategoryEntity>
    abstract activeCategory(id:string, updateCategoryDto: UpdateCategoryDto): Promise<CategoryEntity>
}