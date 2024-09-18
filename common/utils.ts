export function hasDecimals(num: number): boolean {
}

export function localStorageKeyExists(key: string): boolean {
    const value = localStorage.getItem(key);
    return value !== null;
}
