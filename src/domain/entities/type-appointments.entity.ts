export class TypeAppointmentEntity {
    private constructor(
        public id: number,
        public nombre: string,
        public tipo: string,
        public duracion: number,
        public isRemove: boolean) {
    }

    static fromObject(object: { [key: string]: any }): TypeAppointmentEntity {
        const { id, nombre, tipo, duracion, isRemove } = object
        return new TypeAppointmentEntity(id, nombre, tipo, duracion, isRemove)
    }
}