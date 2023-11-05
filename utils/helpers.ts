import { format } from "date-fns";

export const formatDate = (data: string) => {
  const date = new Date(data);
  const formattedDate = format(date, "MMMM dd, yyyy");
  return formattedDate;
};
