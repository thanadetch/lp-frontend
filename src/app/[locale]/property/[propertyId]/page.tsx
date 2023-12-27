import React from "react";
import {PropertyDetail} from "@/app/components/PropertyDetail/PropertyDetail";
import {getProperty} from "@/app/services/property";

const PropertyDetailPage = async ({params}: { params: { locale: string, propertyId: string } }) => {
    const {data} = await getProperty(params.propertyId);

    return (
        <div className={"container mx-auto px-4 py-12"}>
            <PropertyDetail property={data.data.attributes}/>
        </div>
    );
};

export default PropertyDetailPage;
