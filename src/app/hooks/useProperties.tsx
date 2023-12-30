import {getProperties} from "@/app/services/property";
import {IPagination} from "@/app/types/pagination";
import useSWRImmutable from "swr/immutable";
import {ListingType} from "@/app/types/listingType";

export interface PropertiesFilters {
    codeId?: string,
    listingType: ListingType
}

const propertiesKey = (propertiesFilters: PropertiesFilters, pagination: IPagination) => {
    return [propertiesFilters.codeId, propertiesFilters.listingType, pagination.page, pagination.pageSize];
};

const useProperties = (propertiesFilters: PropertiesFilters, pagination: IPagination) => {
    const {data, isLoading, error} = useSWRImmutable(
        propertiesKey(propertiesFilters, pagination),
        () => {
            return getProperties(propertiesFilters, pagination);
        },
        {
            shouldRetryOnError: false,

        },
    );

    return {
        data: data?.data,
        isLoading,
    };
};

export default useProperties;
