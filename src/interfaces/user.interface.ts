export interface PhoneNumber {
    number: string; // Corregido de 'nunmber' a 'number'
    ext?: string;
    holder?: string;
}

export interface ContactInfo {
    phoneNumbers: PhoneNumber[];
    socialMediaLinks?: string[];
}

export interface LocationInfo {
    country: string;
    department: string;
    city: string;
    neighborhood: string;
    address: string;
}