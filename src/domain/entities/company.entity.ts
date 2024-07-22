import { ContactInfo, LocationInfo } from "../../interfaces";
import { CustomError } from "../errors";

export class CompanyEntity {
    private constructor(
        public readonly name: string,
        public readonly contactInfo: ContactInfo,
        public readonly location: LocationInfo,
        public readonly manager: string,
        public readonly logo?: string,
    ) { }

    static fromObject(object: { [key: string]: any }): CompanyEntity {
        const { name, logo, contactInfo, location, manager } = object;

        if (!name) throw CustomError.badRequest('El nombre de la compañía es requerido');
        if (!manager) throw CustomError.badRequest('El gerente de la compañía es requerido');

        // Validar ContactInfo
        if (!contactInfo) throw CustomError.badRequest('La información de contacto es requerida');
        if (!Array.isArray(contactInfo.phoneNumbers) || contactInfo.phoneNumbers.length === 0) {
            throw CustomError.badRequest('Se requiere al menos un número de teléfono');
        }
        for (const phone of contactInfo.phoneNumbers) {
            if (!phone.number) throw CustomError.badRequest('El número de teléfono es requerido');
        }

        // Validar LocationInfo
        if (!location) throw CustomError.badRequest('La información de ubicación es requerida');
        if (!location.country) throw CustomError.badRequest('El país es requerido');
        if (!location.department) throw CustomError.badRequest('El departamento es requerido');
        if (!location.city) throw CustomError.badRequest('La ciudad es requerida');
        if (!location.neighborhood) throw CustomError.badRequest('El vecindario es requerido');
        if (!location.address) throw CustomError.badRequest('La dirección es requerida');

        return new CompanyEntity(name, contactInfo, location, manager, logo);
    }
}