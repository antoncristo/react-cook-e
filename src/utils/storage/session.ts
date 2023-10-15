export const setSessionStorage = (key: string, value: string): void => {
	sessionStorage.setItem(key, value);
};

export const getSessionStorage = (key: string): string | null =>
	sessionStorage.getItem(key);

export const removeSessionStorage = (key: string) => {
	sessionStorage.removeItem(key);
};
