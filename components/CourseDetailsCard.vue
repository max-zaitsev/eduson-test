<script setup lang="ts">
import type { Course } from "@/lib/types";

const props = defineProps<{
  course: Course;
}>();

const emits = defineEmits(["delete"]);

const deleteCourse = (id: number) => {
  emits("delete", id);
};

const priceFomatted = computed(() => toRub(props.course.price));
</script>

<template>
  <v-card class="" elevated>
    <div class="img-container">
      <v-img
        width="100%"
        aspect-ratio="15/8"
        :alt="course.name"
        :src="course.picture_url"
      ></v-img>
    </div>
    <v-card-title>{{ course.name }}</v-card-title>
    <v-card-text class="card__description">{{
      course.description
    }}</v-card-text>
    <v-card-text class="card__footer">
      <p><v-icon icon="mdi-clock-outline" /> {{ course.duration }} ч.</p>
      <p>{{ priceFomatted }}</p>
      <v-chip>{{ course.level }}</v-chip>
    </v-card-text>
    <v-card-actions>
      <NuxtLink :to="`/courses/edit/${course.id}`">
        <v-btn color="primary">Edit</v-btn>
      </NuxtLink>
      <v-btn @click="deleteCourse(course.id)" color="error">Delete</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped lang="scss">
.img-container {
  width: 100%;
  aspect-ratio: 15 / 8;
}
.card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: min-content;
}
</style>
