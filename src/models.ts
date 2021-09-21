interface MetaTagsContent {
    title: string;
}

interface HeroSectionContent {
    navBar: {
        themeSwitcher: {
            turnToDark: string;
            turnToLight: string;
        };
        languageSelector: {
            title: string;
            turnToEn: string;
            turnToPt: string;
        };
    };
    greeting: string;
    description: {
        prefix: string;
        languages: string[];
        and: string;
        suffix: string;
    };
    socialLinks: {
        imageUrl: string;
        link: string;
        alt: string;
    }[];
    resumeButton: {
        label: string;
        link: string;
    };
}

export interface BaseCard {
    imageUrl: string;
    name: string;
    description: string;
    link?: string;
}

interface BaseSectionContent<CardListType extends BaseCard = BaseCard> {
    title: string;
    description: string;
    list?: CardListType[];
}

interface Course extends BaseCard {
    institution: string;
    hours: number | string;
}

interface Footer {
    /** eg. "Developed by" */
    prefix: string;
    /** eg. "Luis Felipe" */
    author: string;
    /** eg. "." */
    suffix: string;
}

export interface Content {
    meta: MetaTagsContent;
    hero: HeroSectionContent;
    skills: BaseSectionContent;
    projects: BaseSectionContent;
    education: BaseSectionContent<Course>;
    footer: Footer;
}
