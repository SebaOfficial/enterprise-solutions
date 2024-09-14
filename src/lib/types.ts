export interface Solutions {
    categories: string[];
    solutions: Solution[];
}

export interface Solution {
    name: string;
    url: string;
    description: string;
    category: number;
    github: string;
}