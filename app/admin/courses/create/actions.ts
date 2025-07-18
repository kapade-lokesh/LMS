"use server";
import { prisma } from "@/lib/db";
import { ApiResponse } from "@/lib/types";
import { courseSchema, CourseSchemaType } from "@/lib/zodSchemas";

export async function CreateCourse(
  data: CourseSchemaType
): Promise<ApiResponse> {
  try {
    const validation = courseSchema.safeParse(data);
    if (!validation.success) {
      return {
        status: "error",
        message: "Invalid Form Data",
      };
    }

    const createdCourse = await prisma.course.create({
      data: { ...validation.data, userId: "asdasdas" },
    });

    return {
      status: "success",
      message: "Course Created",
    };
  } catch (error) {
    return {
      status: "error",
      message: "Fail to Create Course",
    };
  }
}
