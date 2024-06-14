<script setup lang="ts">
import type { Course } from "@/lib/types";
import { coursesApi } from "~/lib/api";

const route = useRoute();
const coursesStore = useCoursesStore();

const courseId = computed(() => Number(route.params.id));

const {
  data: course,
  status,
  error,
} = await useLazyAsyncData(() => coursesApi.getCourseById(unref(courseId)));

const onsubmit = async (values: Course) => {
  try {
    await coursesStore.updateCourse({ ...values, id: courseId.value });
    navigateTo(`/courses/${courseId.value}`);
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div class="container">
    <NuxtLink class="back-link" :to="`/courses/${courseId}`"
      ><v-icon icon="mdi-arrow-left" /> Back
    </NuxtLink>
    <CourseForm
      v-if="course"
      :course="course"
      class="form"
      @submit="onsubmit"
    />
  </div>
</template>

<style scoped lang="scss">
.back-link {
  display: block;
  text-decoration: none;
  color: inherit;
  margin-left: 24px;
}
.container {
  width: clamp(300px, 100%, 800px);
  margin: 24px auto;
}
</style>
