export interface CommonResponses<T> {
    data: Datum<T>[];
    meta: Meta;
}

export interface CommonResponse<T> {
    data: Datum<T>;
}

export interface Datum<T> {
    id: number;
    attributes: T;
}

export interface Meta {
    pagination: Pagination;
}

export interface Pagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

export interface Images {
    name: string;
    alternativeText: null;
    caption: null;
    width: number;
    height: number;
    formats: Formats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null;
    provider: string;
    provider_metadata: null;
    createdAt: string;
    updatedAt: string;
}

export interface Formats {
    large: FormatDetails;
    small: FormatDetails;
    medium: FormatDetails;
    thumbnail: FormatDetails;
}

export interface FormatDetails {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: null;
    size: number;
    width: number;
    height: number;
}
