import { CustomError } from "../errors"

export class ShopEntity {
    constructor(
        public name: string,
        public phone: string,
        public isActive: boolean,
        public location?: string,
        public logo?: string, 
        public images?: string[],
        public inventory?: string[], 
      ) {}
   static fromObject(object: { [key: string]: any }): ShopEntity {
        const { name, phone, location, logo, images, inventory, isActive } = object

        if (!name) throw CustomError.badRequest('El nombre del producto es requerido')
        if (!phone) throw CustomError.badRequest('El nombre del producto es requerido')
        return new ShopEntity(name, phone, isActive, location, logo, images, inventory)
    }
}