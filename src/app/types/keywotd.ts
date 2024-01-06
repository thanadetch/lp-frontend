import {CommonResponse} from "@/app/types/strapi";
import {Code, SubCode} from "@/app/types/code";

export interface Keyword {
    wordTh: string;
    wordEn: string;
    code: CommonResponse<Code>;
    subCode: CommonResponse<SubCode>;
    searchType: SearchType;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
}

export enum SearchType {
    CODE = "code",
    SUB_CODE = "sub_code",
}
