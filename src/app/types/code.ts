export interface Code {
    codeId:      string;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
}

export interface SubCode {
    codeId: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    code?: Code;
}
