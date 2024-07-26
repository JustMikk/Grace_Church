import { z } from "zod";
import { format, parseISO } from "date-fns";

const EventStatus = z.enum(["UPCOMING", "ONGOING", "COMPLETED", "CANCELLED"]);

const formatDateString = (dateString) => {
  const date = parseISO(dateString);
  return format(date, "MM/dd/yyyy");
};

export const createEventSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  startDate: z.string().transform(formatDateString),
  endDate: z.string().transform(formatDateString),
  status: EventStatus,
});
