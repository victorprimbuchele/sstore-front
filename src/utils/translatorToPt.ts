export function translatorToPt(dictionary: object, word: string): string {
  return dictionary[word as keyof typeof dictionary];
}
