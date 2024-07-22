import { Document } from "mongoose";
import { ContactInfo, LocationInfo } from "./user.interface";

export interface ICompany extends Document {
    name: string;
    logo: string;
    contactInfo?: ContactInfo;
    location?: LocationInfo;
    manager?: string;
    createdAt: Date;
    updatedAt: Date;
}