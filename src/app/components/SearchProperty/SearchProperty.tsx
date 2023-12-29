"use client";

import {AutoComplete, Button, Input} from "antd";
import React, {useEffect, useState} from "react";
import {SearchOutlined} from "@ant-design/icons";
import {getKeyword} from "@/app/services/keyword";
import {useRouter} from "@/lib/navigation";
import {ListingType} from "@/app/types/ListingType";
import {IoLocationOutline} from "react-icons/io5";
import {DefaultOptionType} from "rc-select/lib/Select";

interface SearchPropertyProps {
    listingType: ListingType;
}

export const SearchProperty = ({listingType}: SearchPropertyProps) => {
    const router = useRouter();
    const [options, setOptions] = useState<DefaultOptionType[]>([]);
    const [value, setValue] = useState<string>();


    const clickSearchHandler = () => {
        router.push(`/${listingType}/${value?.toLowerCase() || ""}`);
    };

    const onSelect = (data: string, option: DefaultOptionType) => {
        setValue(option.id);
    };

    const searchHandler = async (text: string) => {
        const response = await getKeyword(text);
        setOptions(response.data.data.map((item) => ({
            id: item.attributes.code.data.attributes.codeId,
            label: (
                <div className={"flex flex-row gap-2 items-center"}>
                    <IoLocationOutline/> {item.attributes.wordEn}
                </div>
            ),
            value: item.attributes.wordEn
        })));
    };

    useEffect(() => {
        searchHandler("");
    }, []);

    return (
        <div className={"flex flex-row gap-2"}>
            <AutoComplete
                className={"flex-1"}
                options={options}
                onSelect={onSelect}
                onSearch={searchHandler}
            >
                <Input size={"large"} placeholder={"Location"} prefix={<SearchOutlined/>}/>
            </AutoComplete>
            <Button size={"large"} type="primary" onClick={clickSearchHandler}>Search now!</Button>
        </div>

    );
};
