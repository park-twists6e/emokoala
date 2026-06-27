import type { Category } from "./categories";

export interface ProjectMedia {
    type: "video" | "image";
    hero: string;
    poster?: string;
    video?: string;
    gallery: string[];
    loop?: boolean; // for video
    autoPlay?: boolean; // for video
    portrait?: boolean; // for images
    showControls?: boolean; //for video
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

