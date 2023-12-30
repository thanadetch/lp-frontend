'use client';

import {Card, Tabs, TabsProps} from "antd";
import React from "react";
import {SearchProperty} from "@/app/components/SearchProperty/SearchProperty";
import {ListingType} from "@/app/types/listingType";
import {useTranslations} from "next-intl";

export const SearchPropertyTab = () => {
    const t = useTranslations("Home");
    const items: TabsProps["items"] = [
        {
            key: "1",
            label: t("rent"),
            children: <SearchProperty listingType={ListingType.rent}/>
        },
        {
            key: "2",
            label: t("buy"),
            children: <SearchProperty listingType={ListingType.sell}/>
        },
    ];

    return (
        <Card className={"max-w-[900px] w-full"} bodyStyle={{padding: "16px", paddingTop: "0"}}>
            <Tabs defaultActiveKey="1" items={items} size={"large"} centered/>
        </Card>
    );
};
