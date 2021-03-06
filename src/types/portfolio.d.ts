export type TInitialState = {
    active_nav: string,
    section_offset: object
}

export type TSectionHeader = {
    large?: string,
    lead: string,
}

export type TSectionIntroduction = {
    header: TSectionHeader,
    background: Array<string>,
}

export type TSectionProfile = {
    header: TSectionHeader,
    about_me: string,
    img: string,
    details: {
        name: string,
        age: string,
        location: string,
        hobbies: Array<string>,
    }
}

export type TExperience = {
    premise: {
        name: string,
        sub: string,
        href: string,
    },
    duration: string,
    title: string,
    description: string,
    location?: string,
    roles?: Array<string>,
}

export type TSectionExperience = {
    header: TSectionHeader,
    educations: Array<TExperience>,
    careers: Array<TExperience>
}

export type TRank = {
    name: string,
    rank: number
}

export type TSectionAbilities = {
    header: TSectionHeader,
    software: Array<TRank>,
    tools: Array<TRank>,
    languages: Array<TRank>,
}

export type TProject = {
    name: string,
    img: string,
    description: string,
    tags: Array<string>,
    duration: string,
    ongoing: boolean,
    href: string,
}

export type TSectionProjects = {
    header: TSectionHeader,
    projects: Array<TProject>,
}

export type THandler = {
    name: string,
    img: string,
    href: string,
}

export type TSectionContact = {
    header: TSectionHeader,
    hanlers: Array<THandler>,
    hire: {
        enabled: boolean,
        contact: string,
    }
}

export type TAppState = {
    initialized: boolean,
    section_offsets?: object,
    active_nav?: string,
    data?: {
        introduction: TSectionIntroduction,
        profile: TSectionProfile,
        experiences: TSectionExperience,
        abilities: TSectionAbilities,
        projects: TSectionProjects,
        contact: TSectionContact,
    }
}

export type TPageProps = {
    state: TAppState,
    setSectionsOffsets: Function,
    handleWindowScroll: Function,
    setActiveNav: Function
}