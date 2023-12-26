export const getImageUrl = (url: string) => {
    return `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${url}`;
}
