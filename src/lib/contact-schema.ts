import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.email().max(254),
  subject: z.string().trim().max(150).optional().default(""),
  message: z.string().trim().min(10).max(5000),
  website: z.string().max(500).optional().default(""),
});

export type ContactInput = z.infer<typeof contactSchema>;
