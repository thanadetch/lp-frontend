import {SubCode} from "@/app/types/code";
import {CommonResponse, CommonResponses, Images} from "@/app/types/strapi";

export interface Property {
    name: string;
    bed: number;
    bath: number;
    sqm: number;
    salePrice: number;
    ownerName: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    ownerPhoneNo: string;
    unitNo: string;
    floor: string;
    isPetFriendly: boolean;
    ownerEmail: string;
    ownerLineId: string;
    propertyType: string;
    listingType: string;
    postBy: string;
    rentalPrice: number;
    propertyCode: string;
    subCode: CommonResponse<SubCode>;
    images: CommonResponses<Images>;
}

