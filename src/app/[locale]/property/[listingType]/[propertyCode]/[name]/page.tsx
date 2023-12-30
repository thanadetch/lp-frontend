import React from "react";
import {PropertyDetail} from "@/app/components/PropertyDetail/PropertyDetail";
import {getProperty} from "@/app/services/property";
import {ListingType} from "@/app/types/listingType";

const PropertyDetailPage = async ({params}: {
    params: { locale: string, propertyCode: string, listingType: ListingType }
}) => {
    const {data} = await getProperty(params.propertyCode?.toUpperCase(), params.listingType);

    return (
        <div className={"container mx-auto px-4 py-12"}>
            <PropertyDetail property={data.data.attributes} listingType={params.listingType}/>
        </div>
    );
};

export default PropertyDetailPage;
