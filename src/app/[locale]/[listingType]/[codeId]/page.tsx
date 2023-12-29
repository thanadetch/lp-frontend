"use client";

import React from "react";
import {PropertyList} from "@/app/components/PropertyList/PropertyList";
import {ListingType} from "@/app/types/ListingType";

const PropertyListPage = ({params}: { params: { codeId: string, listingType: ListingType, locale: string } }) => {

    return (
        <PropertyList codeId={params.codeId} listingType={params.listingType} local={params.locale}/>
    );
};

export default PropertyListPage;
