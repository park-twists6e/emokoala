import type { Category } from "./categories";

export interface ProjectMedia {
    type: "video" | "image";
    hero: string;
    poster?: string;
    video?: string;
    gallery: string[];
    loop?: boolean;
    autoPlay?: boolean;
    portrait?: boolean;
}

export interface Project {
    title: string;
    enabled: boolean;
    featured: boolean;
    categories: Category[];
    description: string;
    media: ProjectMedia;
    role: string;
    software: string[];
    year: number;
}