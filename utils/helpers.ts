import { format } from "date-fns";

export const formatDate = (data: string) => {
  const date = new Date(data);
  const formattedDate = format(date, "MMMM dd, yyyy");
  return formattedDate;
};

export function replaceHyphenWithSpace(inputString: string) {
  // Use the replace method with a regular expression to replace hyphens with spaces
  var stringWithSpaces = inputString.replace(/-/g, " ");

  return stringWithSpaces;
}
