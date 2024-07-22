import mongoose from 'mongoose'
import { ContactInfo, LocationInfo } from './types'
const collectionName = 'Company'
const schema = new mongoose.Schema(
    {
        name: { type: String, required: [true, 'Name is Required'] },
        logo: { type: String, required: [true, 'Name is Required'] },
        contactInfo: { type: ContactInfo },
        location: { type: LocationInfo },
        manager: { type: String },
        
    },
    {
        timestamps: true,
    }
)

export const CompanyModel = mongoose.model(collectionName, schema)
