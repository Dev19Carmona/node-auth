import { Request, Response } from "express";
import { CreateCategoryDto, UpdateCategoryDto } from "../../domain/dtos";
import { CategoryRepository } from "../../domain/repositories";
import { ActiveCategory, CreateCategory, DeleteCategory, GetCategory, UpdateCategory } from "../../domain/use-cases";
import { CustomError } from "../../domain/errors";

export class CategoryController {
    constructor(
        private readonly categoryRepository: CategoryRepository
    ) {

    }
    private handleError = (error: unknown, res: Response) => {
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ error: error.message })
        }
        return res.status(500).json({ error: '¡Internal Server Error!' })
    }
    createCategory = (req: Request, res: Response) => {
        const [error, createCategoryDto] = CreateCategoryDto.create(req.body)
        if (error) return res.status(404).json({ error })
        new CreateCategory(this.categoryRepository)
            .execute(createCategoryDto!)
            .then((response) => res.json(response))
            .catch((err) => this.handleError(err, res))


    }
    getCategory = (req: Request, res: Response) => {
        new GetCategory(this.categoryRepository)
        .execute()
        .then((response) => res.json(response))
        .catch((err) => this.handleError(err, res))
    }

    updateCategory = (req: Request, res: Response) => {
        const [error, updateCategoryDto] = UpdateCategoryDto.update(req.body)
        if (error) return res.status(404).json({ error })
        new UpdateCategory(this.categoryRepository)
        .execute(req.params.id, updateCategoryDto!)
        .then((response) => res.json(response))
        .catch((err) => this.handleError(err, res))
    } 
    deleteCategory = (req: Request, res: Response) => {
        const [error, updateCategoryDto] = UpdateCategoryDto.delete()
        if (error) return res.status(404).json({ error })
        new DeleteCategory(this.categoryRepository)
        .execute(req.params.id, updateCategoryDto!)
        .then((response) => res.json(response))
        .catch((err) => this.handleError(err, res))
    } 
    activeCategory = (req: Request, res: Response) => {
        const [error, updateCategoryDto] = UpdateCategoryDto.active()
        if (error) return res.status(404).json({ error })
        new ActiveCategory(this.categoryRepository)
        .execute(req.params.id, updateCategoryDto!)
        .then((response) => res.json(response))
        .catch((err) => this.handleError(err, res))
    } 
}