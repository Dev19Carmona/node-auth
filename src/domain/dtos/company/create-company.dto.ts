import { ContactInfo, LocationInfo } from "../../../interfaces";

export class CreateCompanyDto {
    private constructor(
        public readonly name: string,
        public readonly logo: string,
        public readonly contactInfo: ContactInfo,
        public readonly location: LocationInfo,
        public readonly manager: string,
    ) {

    }

    static create(object: { [key: string]: any }): [string?, CreateCompanyDto?] {
        const {
            name,
            logo,
            contactInfo,
            location,
            manager,
        } = object


        if (!name) return ['Name is required'];
        if (!logo) return ['Logo is required'];
        if (!manager) return ['Manager is required'];

        // Validar ContactInfo
        if (!contactInfo) return ['Contact information is required'];
        if (!Array.isArray(contactInfo.phoneNumbers) || contactInfo.phoneNumbers.length === 0) {
            return ['At least one phone number is required'];
        }
        for (const phone of contactInfo.phoneNumbers) {
            if (!phone.number) return ['Phone number is required'];
        }

        // Validar LocationInfo
        if (!location) return ['Location information is required'];
        if (!location.country) return ['Country is required'];
        if (!location.department) return ['Department is required'];
        if (!location.city) return ['City is required'];
        if (!location.neighborhood) return ['Neighborhood is required'];
        if (!location.address) return ['Address is required'];

        return [undefined, new CreateCompanyDto(
            name,
            logo,
            contactInfo,
            location,
            manager
        )];
    }
}