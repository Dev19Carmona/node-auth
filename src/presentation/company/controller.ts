import { Request, Response } from "express";
import { CreateCompanyDto } from "../../domain/dtos";
import { CompanyRepository } from "../../domain/repositories";
import { CreateCompany } from "../../domain/use-cases";
import { CustomError } from "../../domain/errors";

export class CompanyController {
    constructor(
        private readonly companyRepository: CompanyRepository
    ) {

    }
    private handleError = (error: unknown, res: Response) => {
        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ error: error.message })
        }
        return res.status(500).json({ error: '¡Internal Server Error!' })
    }
    createCompany = (req: Request, res: Response) => {
        const [error, createCompanyDto] = CreateCompanyDto.create(req.body)
        if (error) return res.status(404).json({ error })
        new CreateCompany(this.companyRepository)
            .execute(createCompanyDto!)
            .then((response) => res.json(response))
            .catch((err) => this.handleError(err, res))


    }
}