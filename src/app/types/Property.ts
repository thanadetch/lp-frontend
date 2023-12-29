import {SubCode} from "@/app/types/code";
import {CommonResponse, CommonResponses, Images} from "@/app/types/strapi";
import {ListingType} from "@/app/types/ListingType";

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
    listingType: ListingType;
    postBy: string;
    rentalPrice: number;
    propertyCode: string;
    subCode: CommonResponse<SubCode>;
    images: CommonResponses<Images>;
}

