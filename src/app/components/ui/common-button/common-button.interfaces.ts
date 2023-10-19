export enum COMMON_BUTTON_TYPES {
    PRIMARY = 'PRIMARY',
    SECONDARY = 'SECONDARY',
    LINK = 'LINK'
}

export const COMMON_BUTTON_STYLES = {
    PRIMARY: {
        shape: 'round',
        fill: 'solid',
        expand: 'block'
    },
    SECONDARY: {
        shape: 'round',
        fill: 'outline',
        expand: 'block'
    },
    LINK: {
        shape: 'round',
        fill: 'clear',
        expand: 'block'
    }
}

export interface ICOMMON_BUTTON_STYLES {
    shape: string,
    fill: string,
    expand: string
}