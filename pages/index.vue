<script setup lang="ts">
const coursesStore = useCoursesStore();
</script>

<template>
  <main class="main">
    <section class="cards">
      <nuxt-link
        class="link"
        v-for="course in coursesStore.courses"
        :key="course.id"
        :to="`/courses/${course.id}`"
      >
        <CourseCard :course="course" class="cards__item" />
      </nuxt-link>
    </section>
  </main>
</template>

<style lang="scss">
.link {
  text-decoration: none;
}
.main {
  max-width: 1440px;
  margin: 0 auto;
}
.cards {
  margin-top: 64px;
  padding: 24px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  gap: 24px;
  width: 100%;
  margin: 64px auto;
}

.cards__item {
}
</style>
