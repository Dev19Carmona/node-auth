import { CompanyDataSource } from "../../../domain/datasources";
import { CreateCompanyDto } from "../../../domain/dtos";
import { CompanyEntity } from "../../../domain/entities/company.entity";
import { CompanyRepository } from "../../../domain/repositories";

export class MongoCompanyRepositoryImpl implements CompanyRepository{
    constructor(
        private readonly companyDataSource: CompanyDataSource
    ){

    }
    createCompany(createCompanyDto: CreateCompanyDto): Promise<CompanyEntity> {
        return this.companyDataSource.createCompany(createCompanyDto)
    }

}