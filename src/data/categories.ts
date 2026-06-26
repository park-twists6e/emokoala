//DEFINE CATS (compile-time constants)
export const CATEGORY = {
    ANIMATION: "animation",
    EDITING: "editing",
    BACKGROUND_ART: "background-art",
    CHARACTERS: "characters",
} as const;

export type Category =
    (typeof CATEGORY)[keyof typeof CATEGORY];


//CONFIGURE CATS (display information)
export const categories = {
    [CATEGORY.ANIMATION]: {
        id: CATEGORY.ANIMATION,
        title: "Animation",
        description: "Character animation, motion studies, and finished animation work.",
        thumbnail: "/public/projects/image/Thumb-BrNg8rN8f2-v3.jpg",
        enabled: true,
        order: 1,
    },

    [CATEGORY.EDITING]: {
        id: CATEGORY.EDITING,
        title: "Editing",
        description: "Video editing work focused on pacing, rhythm, story flow, and visual clarity.",
        thumbnail: "/public/projects/image/Thumb-A6ipUWjkXIS.jpg",
        enabled: true,
        order: 4,
    },

    [CATEGORY.BACKGROUND_ART]: {
        id: CATEGORY.BACKGROUND_ART,
        title: "Background Art",
        description: "Environment art, layouts, and background design pieces.",
        thumbnail: "/public/projects/image/_background-art/6596373a-0057-4d7d-b9b6-38f8cc4a2d4c_rw_1200_f59e7fd0.png",
        enabled: true,
        order: 3,
    },

    [CATEGORY.CHARACTERS]: {
        id: CATEGORY.CHARACTERS,
        title: "Characters",
        description: "Character concepts, expressions, poses, and visual development.",
        thumbnail: "/public/projects/image/char3.png",
        enabled: true,
        order: 2,
    },
};