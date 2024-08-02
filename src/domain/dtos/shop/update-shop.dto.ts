import { ContactInfo, LocationInfo } from "../../../interfaces";

export class UpdateShopDto {
    private constructor(
        public readonly name?: string,
        public readonly contactInfo?: ContactInfo,
        public readonly locationInfo?: LocationInfo,
        public readonly products?: string[],
        public readonly img?: string,
        public readonly company?: string
    ) {}

    static create(object: { [key: string]: any }): [string?, UpdateShopDto?] {
        const {
            name,
            contactInfo,
            locationInfo,
            products,
            img,
            company
        } = object;

        // Validar ContactInfo si está presente
        if (contactInfo) {
            if (!Array.isArray(contactInfo.phoneNumbers) || contactInfo.phoneNumbers.length === 0) {
                return ['At least one phone number is required if contact information is provided'];
            }
            for (const phone of contactInfo.phoneNumbers) {
                if (!phone.number) return ['Phone number is required if contact information is provided'];
            }
        }

        // Validar LocationInfo si está presente
        if (locationInfo) {
            if (!locationInfo.country) return ['Country is required if location information is provided'];
            if (!locationInfo.department) return ['Department is required if location information is provided'];
            if (!locationInfo.city) return ['City is required if location information is provided'];
            if (!locationInfo.neighborhood) return ['Neighborhood is required if location information is provided'];
            if (!locationInfo.address) return ['Address is required if location information is provided'];
        }

        // Validar products (opcional)
        if (products && !Array.isArray(products)) return ['Products must be an array if provided'];

        return [
            undefined,
            new UpdateShopDto(
                name,
                contactInfo,
                locationInfo,
                products,
                img,
                company
            )
        ];
    }
}
