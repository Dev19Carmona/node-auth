import { Request, Response } from 'express'
import { CreatePetDto, CreateUserDto, GetDoctorsDto } from '../../domain/dtos'
import { PetRepository, UserRepository } from '../../domain/repositories'
import { CustomError } from '../../domain/errors'
import { DeletePet, GetDoctors, GetMyPets, RegisterPet } from '../../domain/use-cases'

export class UserController {
  constructor(private readonly userRepository: UserRepository) {}
  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message })
    }
    return res.status(500).json({ error: '¡Internal Server Error!' })
  }
  getDoctors = (req: Request, res: Response) => {
    console.log({body:req.body});
    const [error, getDoctorsDto] = GetDoctorsDto.create(req.body)
    if (error) return res.status(404).json({ error })
    console.log({getDoctorsDto});
    
    new GetDoctors(this.userRepository)
    .execute(getDoctorsDto!)
    .then((doctors) => res.json(doctors))
    .catch((err) => this.handleError(err, res))

  }
   
}
