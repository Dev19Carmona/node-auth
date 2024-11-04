import { CustomError } from "../errors";

export class CategoryEntity {
    private constructor(
        public readonly name: string,
        public readonly _id: string,
        public readonly isActive: boolean,
    ) { }

    static fromObject(object: { [key: string]: any }): CategoryEntity {
        const { name, _id, isActive } = object;
        console.log(object);

        if (!name) throw CustomError.badRequest('El nombre es requerido');
        if (!_id) throw CustomError.badRequest('El _id es requerido');
        if (typeof isActive !== 'boolean') throw CustomError.badRequest('isActive es requerido');


        return new CategoryEntity(name, _id, isActive);
    }
}