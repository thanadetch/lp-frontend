import {CommonResponse} from "@/app/types/strapi";
import {Code} from "@/app/types/code";

export interface Keyword {
    wordTh: string;
    wordEn: string;
    code: CommonResponse<Code>
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
}
