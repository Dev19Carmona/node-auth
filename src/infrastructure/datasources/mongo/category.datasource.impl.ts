
import { CategoryModel } from "../../../data/mongodb";
import { CategoryDataSource } from "../../../domain/datasources";
import { CreateCategoryDto, UpdateCategoryDto } from "../../../domain/dtos";
import { CategoryEntity } from "../../../domain/entities";
import { CustomError } from "../../../domain/errors";
import { upsertObject } from "./constants";

export class MongoCategoryDataSourceImpl implements CategoryDataSource {
    async activeCategory(id: string, updateCategoryDto: UpdateCategoryDto): Promise<CategoryEntity> {
        try {
            const activedCategory = await this.updateCategory(id, updateCategoryDto)
            if (!activedCategory) {
                throw new Error('Failed deleted Category')
            }
            return activedCategory

        } catch (error) {
            if (error instanceof CustomError) {
                throw error
            }
            throw CustomError.internalServer()
        }
    }
    async deleteCategory(id: string, updateCategoryDto: UpdateCategoryDto): Promise<CategoryEntity> {
        try {
            const deletedCategory = await this.updateCategory(id, updateCategoryDto)
            if (!deletedCategory) {
                throw new Error('Failed deleted Category')
            }
            return deletedCategory

        } catch (error) {
            if (error instanceof CustomError) {
                throw error
            }
            throw CustomError.internalServer()
        }
    } 
    async updateCategory(id: string, updateCategoryDto: UpdateCategoryDto): Promise<CategoryEntity> {
        try {
            const updatedCategory = await CategoryModel.findOneAndUpdate({ _id: id }, updateCategoryDto)
            console.log(updatedCategory);
            
            if (!updatedCategory) {
                throw new Error('Failed updated Category')
            }
            return CategoryEntity.fromObject(updatedCategory!)
        } catch (error) {
            if (error instanceof CustomError) {
                throw error
            }
            throw CustomError.internalServer()
        }
    }
    async getCategory(): Promise<CategoryEntity[]> {
        try {
            const roles = await CategoryModel.find()
            return roles.map(role => CategoryEntity.fromObject(role))
        } catch (error) {
            if (error instanceof CustomError) {
                throw error
            }
            throw CustomError.internalServer()
        }
    }
    async createCategory(createCategoryDto: CreateCategoryDto): Promise<CategoryEntity> {
        try {
            const { name } = createCategoryDto
            const newProduct = await CategoryModel.findOneAndUpdate
                (
                    { name },
                    createCategoryDto,
                    upsertObject
                )
            return CategoryEntity.fromObject(newProduct!)
        } catch (error) {
            if (error instanceof CustomError) {
                throw error
            }
            throw CustomError.internalServer()
        }
    }

}