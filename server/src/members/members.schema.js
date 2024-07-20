import { z } from "zod";

export const createMemberSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  phoneNumber: z.string(),
  donations: z.number().default(0.0).optional(),
});
