/***
 * The function to make text abstract if it is too long
 * to prevent the interface bugs
 * @type {function(text: string, maxLength: number): string}
 */

export const textAbstract = (
  text: string | null | undefined,
  maxLength: number
): string => {
  if (text == null || text === undefined) return "";
  if (text.length <= maxLength) return text;

  return text.substring(0, maxLength).trim().concat("...");
};
