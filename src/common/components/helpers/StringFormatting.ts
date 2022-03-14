export const formatToCamelCase = (text: String) => text.toLocaleUpperCase();

export const replaceUnderLine = (text: String) => formatToCamelCase(text.replace('_', ' '));
