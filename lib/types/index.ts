import { object, string, number, boolean, date, type InferType } from "yup";

type CourseLevels = "Beginner" | "Intermediate" | "Advanced" | "High";

const courseSchema = object({
  id: number().required().positive().integer(),
  name: string().required(),
  description: string().required(),
  picture_url: string().required().url(),
  duration: number().required().positive().integer(),
  price: number().required().positive(),
  level: string<CourseLevels>().required(),
  category: string().required(),
  created_at: date().required(),
  updated_at: date().required(),
});

type Course = InferType<typeof courseSchema>;

type CourseResponse = Omit<Course, "created_at" | "updated_at" | "price"> & {
  created_at: string;
  updated_at: string;
  price: string;
};

export { type Course, type CourseLevels, type CourseResponse, courseSchema };


