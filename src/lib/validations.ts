import { z } from "zod";

export const mediumPostSchema = z.object({
  title: z.string(),
  link: z.string().url(),
  thumbnail: z.string().url().optional(),
  description: z.string(),
  pubDate: z.string(),
  categories: z.array(z.string()),
  author: z.string(),
});

export const projectSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  image: z.string().url(),
  techNames: z.array(z.string()),
  githubLink: z.string().url(),
  liveLink: z.string().url(),
  category: z.string(),
});

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const mediumResponseSchema = z.object({
  status: z.string(),
  items: z.array(mediumPostSchema),
});

export type MediumPost = z.infer<typeof mediumPostSchema>;
export type Project = z.infer<typeof projectSchema>;
export type ContactForm = z.infer<typeof contactFormSchema>;
export type MediumResponse = z.infer<typeof mediumResponseSchema>;
