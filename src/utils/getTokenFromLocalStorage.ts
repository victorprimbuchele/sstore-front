export function getTokenFromLocalStorage(key: string) {
    if (localStorage.getItem(key) === undefined) {
        return undefined;
    }

    return localStorage.getItem(key);
}