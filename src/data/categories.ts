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
        description: "Animation showcasing movement, character performance, and storytelling",
        thumbnail: "/projects/image/Thumb-BrNg8rN8f2.jpg",
        enabled: true,
        order: 2,
    },

    [CATEGORY.EDITING]: {
        id: CATEGORY.EDITING,
        title: "Video Editing",
        description: "Video editing for social media and creative projects",
        thumbnail: "/projects/image/Thumb-A6ipUWjkXIS.jpg",
        enabled: true,
        order: 4,
    },

    [CATEGORY.BACKGROUND_ART]: {
        id: CATEGORY.BACKGROUND_ART,
        title: "Background Art",
        description: "Background art for webcomics and online projects",
        thumbnail: "/projects/image/_background-art/6596373a-0057-4d7d-b9b6-38f8cc4a2d4c_rw_1200_f59e7fd0.png",
        enabled: true,
        order: 3,
    },

    [CATEGORY.CHARACTERS]: {
        id: CATEGORY.CHARACTERS,
        title: "Original Characters",
        description: "Original character designs and concept artwork",
        thumbnail: "/projects/image/char1.png",
        enabled: true,
        order: 1,
    },
};