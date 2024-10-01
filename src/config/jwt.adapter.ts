import jwt from 'jsonwebtoken'
import { envs } from './envs'

const JWT_SEED = envs.JWT_SEED

export class JwtAdapter {
  static async generateToken(
    payload: Object,
    duration: string = '24h'
  ): Promise<string | null> {
    return new Promise((resolve) => {
      jwt.sign(payload, JWT_SEED, { expiresIn: duration }, (err, token) => {
        if (err) return resolve(null)
        return resolve(token!)
      })
    })
  }

  static validateToken<T>(token: string): Promise<T | null> {
    return new Promise((resolve) => {
      jwt.verify(token, JWT_SEED, (err, decoded) => {
        if (err) return resolve(null)
        resolve(decoded as T)
      })
    })
  }

  // Nuevo método para decodificar el token sin validar
  static decodeToken(token: string): any {
    const decoded = jwt.decode(token);
    return decoded;
  }
}
