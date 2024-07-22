const PhoneNumber = {
    number: { type: String, required: [true, 'Number is Required'] },
    ext: String,
    holder: String,
}

export const ContactInfo = {
    phoneNumbers: [PhoneNumber],
    socialMediaLinks: [String],
}

export const LocationInfo = {
    country: { type: String, required: [true, 'Number is Required'] },
    department: { type: String, required: [true, 'Number is Required'] },
    city: { type: String, required: [true, 'Number is Required'] },
    neighborhood: { type: String, required: [true, 'Number is Required'] },
    address: { type: String, required: [true, 'Number is Required'] },
}