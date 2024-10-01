import { ContactInfo, LocationInfo } from "../../../interfaces";

export class CreateShopDto {
    private constructor(
        public readonly name: string,
        public readonly contactInfo: ContactInfo,
        public readonly locationInfo: LocationInfo,
        public readonly products: string[],
        public readonly img: string,
        public readonly company: string
    ) {}

    static create(object: { [key: string]: any }): [string?, CreateShopDto?] {
        const {
            contactInfo,
            locationInfo,
            products,
            img,
            company
        } = object;

        if (!contactInfo?.name) return ['Name is required'];

        // Validar ContactInfo
        if (!contactInfo) return ['Contact information is required'];
        // if (!Array.isArray(contactInfo.phoneNumbers) || contactInfo.phoneNumbers.length === 0) {
        //     return ['At least one phone number is required'];
        // }
        // for (const phone of contactInfo.phoneNumbers) {
        //     if (!phone.number) return ['Phone number is required'];
        // }

        // Validar LocationInfo
        if (!locationInfo) return ['Location information is required'];
        if (!locationInfo.country) return ['Country is required'];
        if (!locationInfo.department) return ['Department is required'];
        if (!locationInfo.city) return ['City is required'];
        if (!locationInfo.neighborhood) return ['Neighborhood is required'];
        if (!locationInfo.address) return ['Address is required'];

        // Validar products (opcional)
        if (products && !Array.isArray(products)) return ['Products must be an array'];

        return [
            undefined,
            new CreateShopDto(
                contactInfo.name,
                contactInfo,
                locationInfo,
                products || [],
                img || 'no-image',
                company || ''
            )
        ];
    }
}