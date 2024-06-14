<template>
  <v-app>
    <TheHeader class="header" />
    <v-main>
      <NuxtLoadingIndicator class="indicator" />
      <NuxtPage class="page" />
    </v-main>
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
