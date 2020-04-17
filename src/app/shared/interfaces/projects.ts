export interface IProjects {
    id: string;
    title: string;
    type: string;
    team: string;
    description: string;
    platforms: Array<any>;
    technologies: Array<any>;
    reasonToCreate?: string;
    images?: Image;
    siteURL?: string;
    appDownloadURL?: string;
    githubURL?: string;
}

// export enum EPlatforms {
//     All = 'all', //All Platforms
//     Web = 'web',
//     Android = 'android',
//     Desktop = 'desktop'
// }

export interface Image {
    hero?: ImageFormats;
    screenshots?: Array<ImageFormats>;
}

export interface ImageFormats {
    high_jpg: string;
    high_webp: string;
    tiny_jpg?: string;
    tiny_webp?: string;
}