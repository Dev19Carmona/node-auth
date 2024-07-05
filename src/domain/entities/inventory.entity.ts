import { CustomError } from "../errors"

export class InventoryEntity {
    private constructor(
        public readonly name: string,
        public readonly price: number,
        public readonly img: any
    ) {

    }
   static fromObject(object: { [key: string]: any }): InventoryEntity {
        const { name, price, img } = object

        if (!name) throw CustomError.badRequest('El nombre del producto es requerido')
        if (!price) throw CustomError.badRequest('El nombre del producto es requerido')
        return new InventoryEntity(name, price, img)
    }
}