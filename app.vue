<template>
  <v-app>
    <TheHeader />
    <NuxtLoadingIndicator />
    <NuxtPage />
  </v-app>
</template>

<script setup lang="ts">
const coursesStore = useCoursesStore();
coursesStore.init();
</script>

<style lang="scss">
.link {
  text-decoration: none;
  color: inherit;
}
</style>
