import { Request, Response } from 'express'
import { CreateProductDto, CreateShopDto, CreateUserDto, FilterGetProductsDto, LoginUserDto } from '../../domain/dtos'
import { AuthRepository, ProductRepository, ShopRepository } from '../../domain/repositories'
import { CustomError } from '../../domain/errors'
import { JwtAdapter } from '../../config'
import { UserModel } from '../../data/mongodb'
import { CreateProduct, CreateShop, LoginUser, RegisterUser } from '../../domain/use-cases'
import { GetProducts } from '../../domain/use-cases/products/get-products.use-case'

export class ShopController {
  constructor(private readonly shopRepository: ShopRepository) { }
  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message })
    }
    return res.status(500).json({ error: '¡Internal Server Error!' })
  }

  createShop = (req: Request, res: Response) => {
    const [error, createShopDto] = CreateShopDto.create(req.body)
    console.log(createShopDto)
    if (error) return res.status(404).json({ error })
    const createShopUseCase = new CreateShop(this.shopRepository)
    createShopUseCase.execute(createShopDto!)
    .then((newShop)=>res.json(newShop))
    .catch((err) => this.handleError(err, res))

  }
  
//   getProducts = (req: Request, res: Response) => {
//     const [error, filterGetProductsDto] = FilterGetProductsDto.create(req.body)
//     if (error) return res.status(404).json({ error })
//     const getProductsUseCase = new GetProducts(this.productRepository)
//     getProductsUseCase.execute(filterGetProductsDto!)
//       .then((products) => res.json(products))
//       .catch((err) => this.handleError(err, res))

//   }

//   createProduct = (req: Request, res: Response) => {
//     const [error, createProductDto] = CreateProductDto.create(req.body)
//     if (error) return res.status(404).json({ error })
//       const createProductUseCase = new CreateProduct(this.productRepository)
//     createProductUseCase.execute(createProductDto!)
//     .then((product) =>res.json(product))
//     .catch((err) => this.handleError(err, res))

//   }
}
