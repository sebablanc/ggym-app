export interface COLUMN_PICKER_TYPE {
    name: string,
    options: OPTION_COLUMN_TYPE[]
}

export interface OPTION_COLUMN_TYPE {
    text: string
    value: any,
}

export const MONTHS_OPTIONS: OPTION_COLUMN_TYPE[] = [
    { text: 'Enero', value: 0 },
    { text: 'Febrero', value: 1 },
    { text: 'Marzo', value: 2 },
    { text: 'Abril', value: 3 },
    { text: 'Mayo', value: 4 },
    { text: 'Junio', value: 5 },
    { text: 'Julio', value: 6 },
    { text: 'Agosto', value: 7 },
    { text: 'Septiembre', value: 8 },
    { text: 'Octubre', value: 9 },
    { text: 'Noviembre', value: 10 },
    { text: 'Diciembre', value: 11 },
];