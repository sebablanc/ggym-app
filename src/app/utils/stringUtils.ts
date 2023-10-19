export class StringUtils {
    static capitalizeFirstLetter(value: string) {
        return value[0].toUpperCase() + value.substring(1, value.length).toLowerCase();
    }
}