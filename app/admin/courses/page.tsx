import { adminGetCourses } from "@/app/data/admin/admin-get-courses";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import AdminCourseCard from "./_components/AdminCourseCard";

const page = async () => {
  const data = await adminGetCourses();
  return (
    <>
      <div className="flex items-center justify-between">
        <h1>Your Courses</h1>

        <Link href="/admin/courses/create" className={buttonVariants()}>
          Create Course
        </Link>
      </div>

      <div>
        {data.map((course: any) => (
          <AdminCourseCard key={course.id} data={course} />
        ))}
      </div>
    </>
  );
};

export default page;
