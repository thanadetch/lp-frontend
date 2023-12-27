import useSWR from "swr";
import {getProperty} from "@/app/services/property";

const useProperty = (propertyId: string) => {
    const {data, isLoading} = useSWR(propertyId, (propertyId) => {
        return getProperty(propertyId);
    }, {
        shouldRetryOnError: false,

    });

    return {
        data: data?.data,
        isLoading
    };
};

export default useProperty;
