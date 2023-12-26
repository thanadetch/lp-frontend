import InfiniteScroll from "react-infinite-scroll-component";
import {PropertyCard} from "@/app/components/PropertyCard/PropertyCard";
import React, {useEffect, useState} from "react";
import {Pagination} from "@/app/types/pagination";
import {Datum} from "@/app/types/strapi";
import {Property} from "@/app/types/Property";
import {getProperties} from "@/app/services/property";

interface PropertyListProps {
    codeId?: string,
    type: string,
    local: string,
}

export const PropertyList = ({codeId, type}: PropertyListProps) => {
    console.log(codeId);
    console.log(type);
    const [pagination, setPagination] = useState<Pagination>({
        page: 1,
        pageSize: 10
    });
    const [properties, setProperties] = useState<Datum<Property>[]>([]);
    const [total, setTotal] = useState<number>();

    const fetchProperties = () => {
        return getProperties({codeId: codeId?.toUpperCase(), type}, pagination);
    }
    const initialProperties = async () => {
        const res = await fetchProperties();
        setTotal(res.data?.meta?.pagination?.total);
        setProperties(res?.data?.data);
    };

    useEffect(() => {
        initialProperties();
    }, [codeId, type]);

    const fetchMoreData = async () => {
        const res = await fetchProperties();
        setProperties(prvState => [...prvState, ...(res.data?.data || [])]);
        setPagination(prevState => ({...prevState, page: prevState.page + 1}));
    };

    return (
        <div className={"container mx-auto md:p-0 flex justify-center"}>
            <div className={"w-full py-8 "}>
                <InfiniteScroll
                    className={"p-4"}
                    dataLength={properties.length - 1}
                    next={fetchMoreData}
                    hasMore={total == undefined ? true : properties.length < total}
                    loader={
                        <div className={"grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}>
                            <PropertyCard skeleton/>
                            <PropertyCard skeleton/>
                            <PropertyCard skeleton/>
                        </div>
                    }
                >
                    <div className={"grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}>
                        {properties.map((property, index) =>
                            <PropertyCard key={index} item={property.attributes}/>
                        )}
                    </div>

                </InfiniteScroll>
            </div>
        </div>
    );
};
