import { Request, Response } from 'express'
import { CreateUserDto, LoginUserDto } from '../../domain/dtos'
import { AuthRepository } from '../../domain/repositories'
import { CustomError } from '../../domain/errors'
import { UserModel } from '../../data/mongodb'
import { LoginUser, RegisterUser, VerifySession } from '../../domain/use-cases'

export class AuthController {
  constructor(private readonly authRepository: AuthRepository) {}
  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message })
    }
    return res.status(500).json({ error: '¡Internal Server Error!' })
  }
  registerUser = (req: Request, res: Response) => {
    const [error, createUserDto] = CreateUserDto.create(req.body)
    if (error) return res.status(404).json({ error })
    const registerUserUseCase = new RegisterUser(this.authRepository)
    registerUserUseCase
      .execute(createUserDto!)
      .then((userToken) => res.json(userToken))
      .catch((err) => this.handleError(err, res))
  }
  loginUser = (req: Request, res: Response) => {
    const [error, userSessionDto] = LoginUserDto.create(req.body)
    if (error) return res.status(404).json({ error })
    const loginUserUseCase = new LoginUser(this.authRepository)
    loginUserUseCase
      .execute(userSessionDto!)
      .then((session) => res.json(session))
      .catch((err) => this.handleError(err, res))
  }
  getUsers = (req: Request, res: Response) => {
    UserModel.find()
      .then((users) =>
        res.json({
          users,
          user: req.body.user,
        })
      )
      .catch((err) => this.handleError(err, res))
  }
  verifySession = (req: Request, res: Response) => {
    const token = req.params.token
    new VerifySession(this.authRepository)
      .execute(token)
      .then((response) => res.json({ token: response }))
      .catch((err) => this.handleError(err, res))
  }
}
