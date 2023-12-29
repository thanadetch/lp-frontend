import {baseAxios} from "@/app/services/networks";
import {PropertiesFilters} from "@/app/hooks/useProperties";
import {IPagination} from "@/app/types/Pagination";
import {CommonResponses} from "@/app/types/strapi";
import {Property} from "@/app/types/Property";
import {ListingType} from "@/app/types/ListingType";

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
                    } : null,
                    {
                        $or: [
                            filter?.listingType ? {
                                listingType: {
                                    $eq: filter.listingType
                                }
                            } : null,
                            {
                                listingType: {
                                    $eq: ListingType.rent_and_sell
                                }
                            }
                        ]
                    }
                ]
            },
            populate: ["subCode", "subCode.code", "images"],
            pagination
        },
    });
};

const getProperty = async (propertyCode: string, listingType?: ListingType) => {
    const res = await baseAxios.get<CommonResponses<Property>>(`${baseUrl}`, {
        params: {
            filters: {
                $and: [
                    {
                        propertyCode: {
                            $eq: propertyCode
                        }
                    },
                    listingType ? {
                        $or: [
                            {
                                listingType: {
                                    $eq: listingType
                                }
                            },
                            {
                                listingType: {
                                    $eq: ListingType.rent_and_sell
                                }
                            }
                        ]
                    } : null
                ]
            },
            populate: ["subCode", "subCode.code", "images"],
        },
    });
    return {
        ...res,
        data: {data: res.data.data[0]}
    };

};

export {
    getProperties,
    getProperty
};
