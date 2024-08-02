import { ContactInfo, LocationInfo } from "../../../interfaces";

export class UpdateCompanyDto {
    private constructor(
        public readonly name?: string,
        public readonly logo?: string,
        public readonly contactInfo?: ContactInfo,
        public readonly location?: LocationInfo,
        public readonly manager?: string,
    ) {}

    static create(object: { [key: string]: any }): [string?, UpdateCompanyDto?] {
        const {
            name,
            logo,
            contactInfo,
            location,
            manager,
        } = object;

        // Validar ContactInfo si existe
        if (contactInfo) {
            if (!Array.isArray(contactInfo.phoneNumbers) || contactInfo.phoneNumbers.length === 0) {
                return ['At least one phone number is required'];
            }
            for (const phone of contactInfo.phoneNumbers) {
                if (!phone.number) return ['Phone number is required'];
            }
        }

        // Validar LocationInfo si existe
        if (location) {
            if (!location.country) return ['Country is required'];
            if (!location.department) return ['Department is required'];
            if (!location.city) return ['City is required'];
            if (!location.neighborhood) return ['Neighborhood is required'];
            if (!location.address) return ['Address is required'];
        }

        return [undefined, new UpdateCompanyDto(
            name,
            logo,
            contactInfo,
            location,
            manager
        )];
    }
}
