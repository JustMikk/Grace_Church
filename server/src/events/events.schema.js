import { z } from "zod";

const EventStatus = z.enum(["UPCOMING", "ONGOING", "COMPLETED", "CANCELLED"]);

export const createEventSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  startDate: z.string(),
  endDate: z.string(),
  status: EventStatus,
});
