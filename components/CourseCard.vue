<script setup lang="ts">
import type { Course } from "@/lib/types";
import vuetify from "~/plugins/vuetify";

const props = defineProps<{
  course: Course;
}>();

const priceFomatted = computed(() => toRub(props.course.price));
</script>

<template>
  <v-card class="" link height="100%" elevated>
    <v-img
      width="100%"
      cover
      aspect-ratio="15/8"
      :alt="course.name"
      :src="course.picture_url"
    ></v-img>
    <v-card-title>{{ course.name }}</v-card-title>
    <v-card-text class="card__description">{{
      course.description
    }}</v-card-text>
    <v-spacer></v-spacer>
    <v-card-text class="card__footer">
      <p><v-icon icon="mdi-clock-outline" /> {{ course.duration }} ч.</p>
      <p>{{ priceFomatted }}</p>
      <v-chip>{{ course.level }}</v-chip>
    </v-card-text>
  </v-card>
</template>

<style scoped lang="scss">
.card {
}
.card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: min-content;
}
</style>
