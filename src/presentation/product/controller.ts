import { Request, Response } from 'express'
import { CreateProductDto, FilterGetProductsDto } from '../../domain/dtos'
import { ProductRepository } from '../../domain/repositories'
import { CustomError } from '../../domain/errors'
import { CreateProduct } from '../../domain/use-cases'
import { GetProducts } from '../../domain/use-cases/products/get-products.use-case'

export class ProductController {
  constructor(private readonly productRepository: ProductRepository) { }
  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message })
    }
    return res.status(500).json({ error: '¡Internal Server Error!' })
  }
  getProducts = (req: Request, res: Response) => {
    const [error, filterGetProductsDto] = FilterGetProductsDto.create(req.body)
    if (error) return res.status(404).json({ error })
    const getProductsUseCase = new GetProducts(this.productRepository)
    getProductsUseCase.execute(filterGetProductsDto!)
      .then((products) => res.json(products))
      .catch((err) => this.handleError(err, res))

  }

  createProduct = (req: Request, res: Response) => {
    const [error, createProductDto] = CreateProductDto.create(req.body)
    if (error) return res.status(404).json({ error })
    const createProductUseCase = new CreateProduct(this.productRepository)
    createProductUseCase.execute(createProductDto!)
      .then((product) => res.json(product))
      .catch((err) => this.handleError(err, res))

  }
}
