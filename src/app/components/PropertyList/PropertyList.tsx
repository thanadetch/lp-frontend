import InfiniteScroll from "react-infinite-scroll-component";
import {PropertyCard} from "@/app/components/PropertyCard/PropertyCard";
import React, {useEffect, useMemo, useState} from "react";
import {Pagination} from "@/app/types/pagination";
import useProperties from "@/app/hooks/useProperties";
import {Datum} from "@/app/types/strapi";
import {Property} from "@/app/types/Property";

interface PropertyListProps {
    codeId: string,
    type: string,
    local: string,
}

export const PropertyList = ({codeId, type}: PropertyListProps) => {
    const [pagination, setPagination] = useState<Pagination>({
        page: 1,
        pageSize: 10
    });

    const {data, isLoading} = useProperties({codeId: codeId?.toUpperCase(), type}, pagination);
    const [properties, setProperties] = useState<Datum<Property>[]>([]);
    const total = data?.data?.meta?.pagination?.total || 0;

    useEffect(() => {
        setProperties(prvState => [...prvState, ...(data?.data?.data || [])]);
    }, [data?.data]);

    const fetchMoreData = async () => {
        setPagination(prevState => ({...prevState, page: prevState.page + 1}));
    };

    return (
        <InfiniteScroll
            className={"p-4 "}
            dataLength={properties.length - 1}
            next={fetchMoreData}
            hasMore={total == undefined ? true : properties.length < total}
            loader={
                <div className={"pb-10 md:pb-16 px-4 md:px-16"}>
                    <div
                        className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"}>
                        <PropertyCard skeleton/>
                        <PropertyCard skeleton/>
                    </div>
                </div>
            }>

            <div className={"container mx-auto md:p-0 flex justify-center"}>
                <div className={"w-full py-8 "}>
                    <div className={"grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4"}>
                        {properties.map((property, index) =>
                            <PropertyCard key={index} item={property.attributes}/>
                        )}
                    </div>
                </div>
            </div>
        </InfiniteScroll>
    );
};
