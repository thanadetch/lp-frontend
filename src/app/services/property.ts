import {baseAxios} from "@/app/services/networks";
import {PropertiesFilters} from "@/app/hooks/useProperties";
import {Pagination} from "@/app/types/pagination";
import {CommonResponses} from "@/app/types/strapi";
import {Keyword} from "@/app/types/keywotd";
import {Property} from "@/app/types/Property";

const baseUrl = "/api/properties";
const getProperties = (filter: PropertiesFilters, pagination: Pagination) => {
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

export {
    getProperties
};
