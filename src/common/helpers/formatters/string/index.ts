export const formatToCamelCase = (text: String) => text[0].toLocaleUpperCase() + text.slice(1);

export const replaceUnderLine = (text: String) => formatToCamelCase(text.replace('_', ' '));

export const formatToUpperCase = (text: String) => text.toUpperCase();
