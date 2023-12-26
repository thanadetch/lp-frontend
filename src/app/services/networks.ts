import axios from "axios";

const baseUrl =  process.env.NEXT_PUBLIC_STRAPI_API_URL;

export const baseAxios = axios.create({
    baseURL: baseUrl
});
