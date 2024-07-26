import { z } from "zod";
import { format, parseISO } from "date-fns";

const formatDateString = (dateString) => {
  const date = parseISO(dateString);
  return format(date, "MM/dd/yyyy");
};

export const createAnnouncementSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  date: z.string().transform(formatDateString),
});
