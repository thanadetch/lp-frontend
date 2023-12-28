import {baseAxios} from "@/app/services/networks";
import {PropertiesFilters} from "@/app/hooks/useProperties";
import {IPagination} from "@/app/types/Pagination";
import {CommonResponse, CommonResponses} from "@/app/types/strapi";
import {Property} from "@/app/types/Property";

const baseUrl = "/api/properties";
const getProperties = (filter: PropertiesFilters, pagination: IPagination) => {
    return baseAxios.get<CommonResponses<Property>>(baseUrl, {
        params: {
            filters: {
                $and: [
                    filter?.codeId ? {
                        subCode: {
                            code: {
                                codeId: {
                                    $eq: filter.codeId
                                }
                            }
                        }
                    } : null
                ]
            },
            populate: ["subCode", "subCode.code", "images"],
            pagination
        },
    });
};

const getProperty = (id: string) => {
    return baseAxios.get<CommonResponse<Property>>(`${baseUrl}/${id}`, {
        params: {
            populate: ["subCode", "subCode.code", "images"],
        },
    });
}

export {
    getProperties,
    getProperty
};
