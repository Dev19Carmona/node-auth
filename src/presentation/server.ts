import express, { Router } from 'express'
import cors from 'cors'

interface Options {
  port?: number
  router: Router
}
export class Server {
  private readonly app = express()
  private readonly port: number
  private readonly router: Router
  constructor(options: Options) {
    const { port = 3000, router } = options
    this.port = port
    this.router = router
  }
  async start() {
    //TODO Middlewares
    this.app.use(express.json(), cors())
    this.app.use(express.urlencoded({ extended: true }))

    //TODO Init Routes
    this.app.use(this.router)
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`)
    })
  }
}
