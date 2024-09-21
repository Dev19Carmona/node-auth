import { Router } from "express"
import { MongoCompanyDataSourceImpl } from "../../infrastructure/datasources/mongo"
import { MongoCompanyRepositoryImpl } from "../../infrastructure/repositories/mongo"
import { CompanyController } from "./controller"
import { ICompany } from "../../interfaces"
import { Model } from "mongoose"

export class CompanyRoutes {
  static get routes(): Router {
    const companyDataSource = new MongoCompanyDataSourceImpl()

    const companyRepository = new MongoCompanyRepositoryImpl(companyDataSource)
    const controller = new CompanyController(companyRepository)
    const router = Router()
    router.post('/create', controller.createCompany)
    router.get('/')
    return router
  }
}
