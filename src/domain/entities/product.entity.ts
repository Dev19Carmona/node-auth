import { CustomError } from "../errors"

export class ProductEntity {
    constructor(
        public name: string,
        public price: number,
        public img: any
    ) {

    }
   static fromObject(object: { [key: string]: any }): ProductEntity {
        const { name, price, img } = object

        if (!name) throw CustomError.badRequest('El nombre del producto es requerido')
        if (!price) throw CustomError.badRequest('El nombre del producto es requerido')
        return new ProductEntity(name, price, img)
    }
}