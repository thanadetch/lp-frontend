import {SubCode} from "@/app/types/code";
import {CommonResponse, CommonResponses, Images} from "@/app/types/strapi";


export interface Property {
    name: string;
    bed: number;
    bath: number;
    sqm: number;
    price: number;
    salePrice: null;
    ownerName: string;
    call: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    subCode: CommonResponse<SubCode>;
    images: CommonResponses<Images>
}

