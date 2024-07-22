import { CreateCompanyDto } from "../dtos";
import { CompanyEntity } from "../entities/company.entity";

export abstract class CompanyDataSource {
    abstract createCompany(createCompanyDto:CreateCompanyDto):Promise<CompanyEntity>
}