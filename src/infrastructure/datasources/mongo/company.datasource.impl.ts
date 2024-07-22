
import { CompanyModel } from "../../../data/mongodb";
import { CompanyDataSource } from "../../../domain/datasources";
import { CreateCompanyDto } from "../../../domain/dtos";
import { CompanyEntity } from "../../../domain/entities/company.entity";
import { CustomError } from "../../../domain/errors";
import { upsertObject } from "./constants";

export class MongoCompanyDataSourceImpl implements CompanyDataSource {
   async createCompany(createCompanyDto: CreateCompanyDto): Promise<CompanyEntity> {
        try {
            const { name } = createCompanyDto
            const newProduct = await CompanyModel.findOneAndUpdate
            (
                { name }, 
                createCompanyDto, 
                upsertObject
            )
            return CompanyEntity.fromObject(newProduct!)
        } catch (error) {
            console.log({error});
            
            if (error instanceof CustomError) {
                throw error
            }
            throw CustomError.internalServer()
        }
    }

}