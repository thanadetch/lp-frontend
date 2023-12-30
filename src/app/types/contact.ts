import {CommonResponse} from "@/app/types/strapi";
import {Property} from "@/app/types/property";

export interface Contact {
    id: number;
    name: string;
    email: string;
    phoneNo: string;
    lineId: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    listingType: string;
    property?: CommonResponse<Property>;
}

export interface IContactForm {
    name: string;
    email: string;
    phoneNo: string;
    lineId: string;
    property: number;
    listingType: string;
}

