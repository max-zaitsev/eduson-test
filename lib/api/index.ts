import {
  courseSchema,
  type Course,
  type CourseLevels,
  type CourseResponse,
} from "../types";

type CoursePostRequest = Omit<Course, "id" | "created_at" | "updated_at">;
type CoursePutRequest = CoursePostRequest & { id: number };

export const coursesApi = {
  getCourseById: async (id: number) => {
    const response = await $fetch<CourseResponse>(`/api/courses/${id}`);
    const course = courseSchema.cast(response);
    return course;
  },
  getCourses: async () => {
    const response = await $fetch<CourseResponse[]>(`/api/courses`);
    const courses = response.map((course) => courseSchema.cast(course));
    return courses;
  },

  postCourse: async (course: CoursePostRequest) => {
    return $fetch<CourseResponse>(`/api/courses/`, {
      method: "POST",
      body: course,
    });
  },

  putCourse: async (course: CoursePutRequest) => {
    return $fetch<CourseResponse>(`/api/courses/${course.id}`, {
      method: "PUT",
      body: course,
    });
  },

  deleteCourse: async (id: number) => {
    return $fetch(`/api/courses/${id}`, {
      method: "DELETE",
    });
  },
};
