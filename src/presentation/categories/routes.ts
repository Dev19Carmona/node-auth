import { Router } from "express"
import { MongoCategoryDataSourceImpl } from "../../infrastructure/datasources/mongo"
import { MongoCategoryRepositoryImpl } from "../../infrastructure/repositories/mongo"
import { CategoryController } from "./controller"

export class CategoryRoutes {
  static get routes(): Router {
    const categoryDataSource = new MongoCategoryDataSourceImpl()

    const categoryRepository = new MongoCategoryRepositoryImpl(categoryDataSource)
    const controller = new CategoryController(categoryRepository)
    const router = Router()
    router.post('/create', controller.createCategory)
    router.get('/', controller.getCategory)
    router.put('/update/:id', controller.updateCategory)
    router.put('/delete/:id', controller.deleteCategory)
    router.put('/active/:id', controller.activeCategory)
    return router
  }
}
