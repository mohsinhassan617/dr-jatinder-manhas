import { z } from "zod";

// Contact message schema - client version without drizzle dependency
export const insertContactMessageSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;

export type ContactMessage = {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: Date;
};
