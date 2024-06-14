<script setup lang="ts">
import type { Course } from "@/lib/types";

const route = useRoute();
const coursesStore = useCoursesStore();

const courseId = computed(() => Number(route.params.id));

const onsubmit = async (values: Course) => {
  try {
    const res = await coursesStore.createCourse({
      ...values,
      id: courseId.value,
    });
    navigateTo(`/courses/${res.id}`);
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
    <CourseForm class="form" @submit="onsubmit" />
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
  width: clamp(300px, 80%, 800px);
  margin: 24px auto;
}
</style>
