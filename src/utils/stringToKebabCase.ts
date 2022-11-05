export function stringToKebabCase(str: string): string {
    return str.toLowerCase().replaceAll(" ", "-");
}