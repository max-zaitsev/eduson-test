<template>
  <v-app-bar app density="compact">
    <v-app-bar-title
      ><NuxtLink class="link" to="/">Eduson Courses</NuxtLink></v-app-bar-title
    >
    <template v-slot:append>
      <NuxtLink class="link" to="/create"
        ><v-btn icon="mdi-plus"></v-btn
      ></NuxtLink>
    </template>
  </v-app-bar>
</template>
