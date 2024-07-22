import { CreateCompanyDto } from "../../dtos";
import { CompanyEntity } from "../../entities";
import { CompanyRepository } from "../../repositories";

interface CreateCompanyUseCase {
    execute(createCompanyDto: CreateCompanyDto): Promise<CompanyEntity>
}

export class CreateCompany implements CreateCompanyUseCase {
    constructor(
        private readonly companyRepository: CompanyRepository,
        
      ) {}
    execute(createCompanyDto: CreateCompanyDto): Promise<CompanyEntity> {
        const newCompany = this.companyRepository.createCompany(createCompanyDto)

        return newCompany
    }
    
}