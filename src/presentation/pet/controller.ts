import { Request, Response } from 'express'
import { CreatePetDto, CreateUserDto, LoginUserDto } from '../../domain/dtos'
import { AuthRepository } from '../../domain/repositories'
import { CustomError } from '../../domain/errors'
import { JwtAdapter } from '../../config'
import { UserModel } from '../../data/mongodb'
import { LoginUser, RegisterUser } from '../../domain/use-cases'

export class PetController {
  constructor(private readonly authReporitory: AuthRepository) {}
  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message })
    }
    return res.status(500).json({ error: '¡Internal Server Error!' })
  }
  registerPet = (req: Request, res: Response) => {
    const [error, createPetDto] = CreatePetDto.create(req.body)
    if (error) return res.status(404).json({ error })
    const registerUserUseCase = new RegisterUser(this.authReporitory)
    registerUserUseCase
      .execute(createUserDto!)
      .then((userToken) => res.json(userToken))
      .catch((err) => this.handleError(err, res))
  }
  getMyPets = (req: Request, res: Response) => {
    UserModel.find()
      .then((users) =>
        res.json({
          users,
          user: req.body.user,
        })
      )
      .catch((err) => this.handleError(err, res))
  }
}
