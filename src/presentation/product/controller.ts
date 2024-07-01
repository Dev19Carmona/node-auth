import { Request, Response } from 'express'
import { CreateUserDto, FilterGetProductsDto, LoginUserDto } from '../../domain/dtos'
import { AuthRepository, ProductRepository } from '../../domain/repositories'
import { CustomError } from '../../domain/errors'
import { JwtAdapter } from '../../config'
import { UserModel } from '../../data/mongodb'
import { LoginUser, RegisterUser } from '../../domain/use-cases'
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
  // registerUser = (req: Request, res: Response) => {
  //   const [error, createUserDto] = CreateUserDto.create(req.body)
  //   if (error) return res.status(404).json({ error })
  //   const registerUserUseCase = new RegisterUser(this.authReporitory)
  //   registerUserUseCase
  //     .execute(createUserDto!)
  //     .then((userToken) => res.json(userToken))
  //     .catch((err) => this.handleError(err, res))
  // }
  // loginUser = (req: Request, res: Response) => {
  //   const [error, userSessionDto] = LoginUserDto.create(req.body)
  //   if (error) return res.status(404).json({ error })
  //   const loginUserUseCase = new LoginUser(this.authReporitory)
  //   loginUserUseCase
  //     .execute(userSessionDto!)
  //     .then((session) => res.json(session))
  //     .catch((err) => this.handleError(err, res))
  // }
  // getUsers = (req: Request, res: Response) => {
  //   UserModel.find()
  //     .then((users) =>
  //       res.json({
  //         users,
  //         user: req.body.user,
  //       })
  //     )
  //     .catch((err) => this.handleError(err, res))
  // }
}
