export const generateRandString = (firstWord: string): string => {
  return firstWord + (Math.floor(Math.random() * 999)).toString();
}
