"use client";

import React from "react";
import {PropertyList} from "@/app/components/PropertyList/PropertyList";

const PropertyListTypePage = ({params}: { params: { codeId: string, type: string, locale: string } }) => {

    return (
        <PropertyList codeId={params.codeId} type={params.type} local={params.locale}/>
    );
};

export default PropertyListTypePage;
