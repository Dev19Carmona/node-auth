import { CustomError } from "../errors"

export class ProductEntity {
    private constructor(
        public readonly name: string,
        public readonly price: number,
        public readonly img: any
    ) {

    }
   static fromObject(object: { [key: string]: any }): ProductEntity {
        const { name, price, img = '' } = object
        if (!name) throw CustomError.badRequest('El nombre del producto es requerido')
        if (typeof price !== 'number') throw CustomError.badRequest('El precio del producto es requerido')
        return new ProductEntity(name, price, img)
    }
}