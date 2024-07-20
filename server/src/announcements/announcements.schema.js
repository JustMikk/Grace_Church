import { z } from "zod";

export const createAnnouncementSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  date: z.string().transform((dateString) => new Date(dateString)),
});
