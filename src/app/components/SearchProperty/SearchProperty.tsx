"use client";

import {AutoComplete, Button, ConfigProvider, Input} from "antd";
import React, {useCallback, useEffect, useState} from "react";
import {SearchOutlined} from "@ant-design/icons";
import {getKeyword} from "@/app/services/keyword";
import {useRouter} from "@/lib/navigation";
import {ListingType} from "@/app/types/listingType";
import {IoLocationOutline} from "react-icons/io5";
import {DefaultOptionType} from "rc-select/lib/Select";
import {useTranslations} from "next-intl";
import {useParams} from "next/navigation";
import {Locale} from "@/app/types/locale";
import {Keyword, SearchType} from "@/app/types/keywotd";
import {Datum} from "@/app/types/strapi";

interface SearchPropertyProps {
    listingType: ListingType;
}

export const SearchProperty = ({listingType}: SearchPropertyProps) => {
    const params = useParams<{ locale: string }>();
    const t = useTranslations("Home");
    const router = useRouter();
    const [options, setOptions] = useState<DefaultOptionType[]>([]);
    const [value, setValue] = useState<{ subCodeId: string, codeId: string, searchType: SearchType }>();


    const clickSearchHandler = () => {
        switch (value?.searchType) {
            case SearchType.CODE:
                router.push(`/${listingType}/${value?.codeId?.toLowerCase() || ""}`);
                break;
            case SearchType.SUB_CODE:
                router.push(`/${listingType}/${value?.codeId?.toLowerCase() || ""}/${value?.subCodeId?.toLowerCase() || ""}`);
                break;
            default:
                if (value?.subCodeId && value?.codeId) {
                    router.push(`/${listingType}/${value?.codeId?.toLowerCase() || ""}/${value?.subCodeId?.toLowerCase() || ""}`);
                } else if (value?.codeId) {
                    router.push(`/${listingType}/${value?.codeId?.toLowerCase() || ""}`);
                } else {
                    router.push(`/${listingType}`);
                }
                break;
        }

    };

    const onSelect = (data: string, option: DefaultOptionType) => {
        setValue({
            subCodeId: option.subCodeId,
            codeId: option.codeId,
            searchType: option.searchType,
        });
    };

    const getWordLocale = useCallback((keyword: Keyword) => {
        const wordLocale = {
            [Locale.EN]: keyword.wordEn,
            [Locale.TH]: keyword.wordTh,
        };
        return wordLocale[params.locale as Locale];
    }, [params.locale]);

    const getCodeOption = (keyword: Datum<Keyword>) => {
        const searchType = keyword.attributes.searchType;
        const getCodeOptionValue = () => ({codeId: keyword.attributes.code.data?.attributes?.codeId});
        const getSubCodeOptionValue = () => ({
            subCodeId: keyword.attributes.subCode.data?.attributes?.codeId,
            codeId: keyword.attributes.subCode.data?.attributes?.code?.data?.attributes?.codeId,
        });
        switch (searchType) {
            case SearchType.CODE:
                return getCodeOptionValue();
            case SearchType.SUB_CODE:
                return getSubCodeOptionValue();
            default:
                if (keyword.attributes?.subCode?.data) {
                    return getSubCodeOptionValue();
                } else if (keyword.attributes?.code?.data) {
                    return getCodeOptionValue();
                }
        }
    };

    const searchHandler = useCallback(async (text: string) => {
        const response = await getKeyword(text);
        setOptions(response.data.data.map((item) => {
            return {
                ...getCodeOption(item),
                searchType: item.attributes?.searchType,
                label: (
                    <div className={"flex flex-row gap-2 items-center"}>
                        <IoLocationOutline/> {getWordLocale(item.attributes)}
                    </div>
                ),
                value: getWordLocale(item.attributes)
            };
        }));
    }, [getWordLocale]);

    useEffect(() => {
        searchHandler("");
    }, [searchHandler]);

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
