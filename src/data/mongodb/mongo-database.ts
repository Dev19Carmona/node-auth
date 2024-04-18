import mongoose from 'mongoose'
interface Options {
  mongoUrl: string
  dbName: string
}
export class MongoDatabase {
  static async connect(options: Options) {
    try {
      const { mongoUrl, dbName } = options
      mongoose.connect(mongoUrl, {
        dbName,
      })
      console.log(`Mongo connected`)
      return true
    } catch (error) {
      console.log(`Mongo connection Error`)
      throw error
    }
  }
}
