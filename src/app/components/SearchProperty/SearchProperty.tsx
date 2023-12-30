"use client";

import {AutoComplete, Button, ConfigProvider, Input} from "antd";
import React, {useEffect, useState} from "react";
import {SearchOutlined} from "@ant-design/icons";
import {getKeyword} from "@/app/services/keyword";
import {useRouter} from "@/lib/navigation";
import {ListingType} from "@/app/types/listingType";
import {IoLocationOutline} from "react-icons/io5";
import {DefaultOptionType} from "rc-select/lib/Select";
import {useTranslations} from "next-intl";
import {useParams} from "next/navigation";
import {Locale} from "@/app/types/locale";
import {Keyword} from "@/app/types/keywotd";

interface SearchPropertyProps {
    listingType: ListingType;
}

export const SearchProperty = ({listingType}: SearchPropertyProps) => {
    const params = useParams<{ locale: string }>();
    const t = useTranslations("Home");
    const router = useRouter();
    const [options, setOptions] = useState<DefaultOptionType[]>([]);
    const [value, setValue] = useState<string>();


    const clickSearchHandler = () => {
        router.push(`/${listingType}/${value?.toLowerCase() || ""}`);
    };

    const onSelect = (data: string, option: DefaultOptionType) => {
        setValue(option.id);
    };

    const getWordLocale = (keyword: Keyword) => {
        const wordLocale = {
            [Locale.EN]: keyword.wordEn,
            [Locale.TH]: keyword.wordTh,
        };
        return wordLocale[params.locale as Locale];
    };

    const searchHandler = async (text: string) => {

        const response = await getKeyword(text);
        setOptions(response.data.data.map((item) => ({
            id: item.attributes.code.data.attributes.codeId,
            label: (
                <div className={"flex flex-row gap-2 items-center"}>
                    <IoLocationOutline/> {getWordLocale(item.attributes)}
                </div>
            ),
            value: getWordLocale(item.attributes)
        })));
    };

    useEffect(() => {
        searchHandler("");
    }, []);

    return (
        <ConfigProvider
            theme={{
                components: {
                  Select: {
                      optionLineHeight: 2.2,
                  }
                }
            }}
        >
            <div className={"flex flex-row gap-2"}>
                <AutoComplete
                    className={"flex-1"}
                    options={options}
                    onSelect={onSelect}
                    onSearch={searchHandler}
                >
                    <Input size={"large"} placeholder={"Location"} prefix={<SearchOutlined/>}/>
                </AutoComplete>
                <Button size={"large"} type="primary" onClick={clickSearchHandler}>{t("searchNow")}</Button>
            </div>
        </ConfigProvider>
    );
};
