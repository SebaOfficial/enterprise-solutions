export interface Category {
    id: number;
    name: string;
}

export interface Solution {
    name: string;
    url: string;
    description: string;
    category: number;
    selfHost: string[] | string | undefined;
}