import useSWR from "swr";
import {getProperties} from "@/app/services/property";
import {IPagination} from "@/app/types/Pagination";
import useSWRImmutable from "swr/immutable";

export interface PropertiesFilters {
    codeId?: string,
    type: string
}

const propertiesKey = (propertiesFilters: PropertiesFilters, pagination: IPagination) => {
    return [propertiesFilters.codeId, propertiesFilters.type, pagination.page, pagination.pageSize];
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
