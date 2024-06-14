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
} = useLazyAsyncData(() => coursesApi.getCourseById(unref(courseId)));

const tryToDelete = async () => {
  try {
    await coursesStore.deleteCourse(courseId.value);
    navigateTo("/");
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div class="container">
    <NuxtLink class="back-link" :to="`/`"
      ><v-icon icon="mdi-arrow-left" /> Back
    </NuxtLink>
    <CourseDetailsCard
      class="details-card"
      @delete="tryToDelete"
      v-if="course"
      :course="course"
    />
  </div>
</template>

<style scoped lang="scss">
.back-link {
  display: block;
  margin-top: 24px;
  text-decoration: none;
  color: inherit;
  margin-bottom: 24px;
  margin-left: 0;
}
.container {
  width: clamp(300px, 80%, 800px);
  margin: 0 auto;
  margin-top: 64px;
}
</style>
