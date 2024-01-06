import React from "react";
import {PropertyList} from "@/app/components/PropertyList/PropertyList";
import {ListingType} from "@/app/types/listingType";

const Page = ({params}: {
    params: { codeId: string, subCodeId: string, listingType: ListingType, locale: string }
}) => {

    return (
        <PropertyList codeId={params.codeId} subCodeId={params.subCodeId} listingType={params.listingType} local={params.locale}/>
    );
};

export default Page;
