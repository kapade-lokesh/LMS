import { z } from "zod";

export const courseLevels = ["Beginner", "Intermediate", "Advanced"] as const;
export const courseStatus = ["Draft", "Published", "Archived"] as const;
export const courseCategories = [
  "Development",
  "Business",
  "Finance",
  "IT & Software",
  "Office Productivity",
  "Personal Development",
  "Design",
  "Marketing",
  "Health & Fitness",
  "Music",
  "Teaching & Academics",
] as const;

export const courseSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Title must be at least 3 char long" })
    .max(100, { message: "Title must be at most 100 char long" }),
  description: z
    .string()
    .min(3, { message: "Description must be at least 3 char long" }),
  fileKey: z.string().min(1, { message: "File is required" }),
  price: z.coerce
    .number()
    .min(1, { message: "Price must be a positive number" }),
  duration: z.coerce
    .number()
    .min(1, { message: "Duration must be at least 1 hour long" })
    .max(500, { message: "Duration must be at most 500 hours long" }),
  level: z.enum(courseLevels, { message: "Level is required" }),
  category: z.enum(courseCategories),
  smallDescription: z
    .string()
    .min(3, { message: "smallDescription must be at least 3 char long" })
    .max(100, { message: "smallDescription must be at most 100 char long" }),
  slug: z.string().min(3, { message: "Slug must be at least 3 char long" }),
  status: z.enum(courseStatus, { message: "Status is required" }),
});

export type CourseSchemaType = z.infer<typeof courseSchema>;
