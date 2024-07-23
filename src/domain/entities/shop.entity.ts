import { ContactInfo, LocationInfo } from "../../interfaces";
import { CustomError } from "../errors";

export class ShopEntity {
    private constructor(
        public readonly name: string,
        public readonly contactInfo: ContactInfo,
        public readonly locationInfo: LocationInfo,
        public readonly products: string[],
        public readonly img: string,
        public readonly company: string
    ) {}

    static fromObject(object: { [key: string]: any }): ShopEntity {
        const { name, contactInfo, locationInfo, products, img, company } = object;

        if (!name) throw CustomError.badRequest('El nombre de la tienda es requerido');
        if (!contactInfo) throw CustomError.badRequest('La información de contacto es requerida');
        if (!locationInfo) throw CustomError.badRequest('La información de ubicación es requerida');

        // Validar ContactInfo
        if (!Array.isArray(contactInfo.phoneNumbers) || contactInfo.phoneNumbers.length === 0) {
            throw CustomError.badRequest('Se requiere al menos un número de teléfono');
        }
        for (const phone of contactInfo.phoneNumbers) {
            if (!phone.number) throw CustomError.badRequest('El número de teléfono es requerido');
        }

        // Validar LocationInfo
        if (!locationInfo.country) throw CustomError.badRequest('El país es requerido');
        if (!locationInfo.department) throw CustomError.badRequest('El departamento es requerido');
        if (!locationInfo.city) throw CustomError.badRequest('La ciudad es requerida');
        if (!locationInfo.neighborhood) throw CustomError.badRequest('El barrio es requerido');
        if (!locationInfo.address) throw CustomError.badRequest('La dirección es requerida');

        return new ShopEntity(
            name,
            contactInfo,
            locationInfo,
            products || [],
            img || 'no-image',
            company || ''
        );
    }
}