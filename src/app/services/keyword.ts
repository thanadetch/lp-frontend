import {baseAxios} from "@/app/services/networks";
import {CommonResponses} from "@/app/types/strapi";
import {Keyword} from "@/app/types/keywotd";

const baseUrl = "/api/keywords";
const getKeyword = (keyword: string) => {
    return baseAxios.get<CommonResponses<Keyword>>(baseUrl, {
        params: {
            filters: {
                $or: [
                    {
                        wordTh: {
                            $containsi: keyword
                        }
                    },
                    {
                        wordEn: {
                            $containsi: keyword
                        }
                    }
                ]
            },
            populate: ['code']
        },
    });
};

export {
    getKeyword
};

