import type { AsyncDataRequestStatus, NuxtError } from "#app";
import { coursesApi } from "~/lib/api";
import type { Course } from "~/lib/types";

export const useCoursesStore = defineStore("courses", () => {
  const inited = ref(false);
  const courses = ref<Course[]>([]);
  const error = ref<NuxtError<unknown> | null>(null);
  const status = ref<AsyncDataRequestStatus>("idle");

  const courseById = (id: number): Course | undefined => {
    const course = courses.value.find((course) => course.id === id);
    return course;
  };

  const updateCourse = async (course: Course) => {
    const res = await coursesApi.putCourse(course);
    if (!res) throw new Error("Error updating course");
    const index = courses.value.findIndex((c) => c.id === course.id);
    courses.value[index] = course;

    return res;
  };

  const createCourse = async (course: Course) => {
    const response = await coursesApi.postCourse(course);
    const result = {
      ...response,
      price: Number(response.price),
      updated_at: new Date(response.updated_at),
      created_at: new Date(response.created_at),
    };
    if (!result) throw new Error("Error creating course");
    courses.value.push(result);
    return result;
  };

  const deleteCourse = async (id: number) => {
    const res = await coursesApi.deleteCourse(id);
    if (res === "error") throw new Error("Error deleting course");
    courses.value = courses.value.filter((course) => course.id !== id);
    return res;
  };

  const init = () => {
    if (inited.value) return;
    const request = useAsyncData("getCourses", () => coursesApi.getCourses(), {
      lazy: true,
    });

    courses.value = request.data.value || [];
    error.value = request.error.value;
    status.value = request.status.value;

    inited.value = true;
  };

  return {
    courses,
    error,
    status,
    courseById,
    init,
    updateCourse,
    deleteCourse,
    createCourse,
  };
});
