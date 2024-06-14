<script setup lang="ts">
import { ref } from "vue";
import { useField, useForm } from "vee-validate";
import {
  courseCreateSchema,
  courseSchema,
  type Course,
  type CourseCreate,
} from "~/lib/types";

const props = withDefaults(
  defineProps<{
    course?: CourseCreate;
  }>(),
  {
    course: () => {
      return {
        name: "",
        description: "",
        picture_url: "",
        price: 0,
        level: "Beginner",
        duration: 0,
        category: "",
      };
    },
  }
);

const { handleSubmit, handleReset } = useForm({
  validationSchema: courseCreateSchema,

  initialValues: props.course,
});
const name = useField("name");
const description = useField("description");
const pictureUrl = useField("picture_url");
const level = useField("level");
const items = ref(["Beginner", "Intermediate", "Advanced", "High"]);
const duration = useField("duration");
const price = useField("price");
const category = useField("category");

const emits = defineEmits(["submit", "reset"]);
const onSubmit = (values: CourseCreate) => {
  emits("submit", values);
};
const submit = handleSubmit((values) => {
  onSubmit(values);
});
</script>

<template>
  <form class="form" @submit.prevent="submit">
    <v-text-field
      v-model="name.value.value"
      :error-messages="name.errorMessage.value"
      label="Name"
    ></v-text-field>

    <v-textarea
      v-model="description.value.value"
      :error-messages="description.errorMessage.value"
      label="Description"
    ></v-textarea>

    <v-text-field
      v-model="pictureUrl.value.value"
      :error-messages="pictureUrl.errorMessage.value"
      label="Picture URL"
    ></v-text-field>

    <v-text-field
      v-model="price.value.value"
      :error-messages="price.errorMessage.value"
      label="Price"
    ></v-text-field>

    <v-text-field
      v-model="duration.value.value"
      :error-messages="duration.errorMessage.value"
      label="Duration"
    ></v-text-field>

    <v-text-field
      v-model="category.value.value"
      :error-messages="category.errorMessage.value"
      label="Category"
    ></v-text-field>

    <v-select
      v-model="level.value.value"
      :error-messages="level.errorMessage.value"
      :items="items"
      label="Level"
    ></v-select>

    <v-btn class="me-4" type="submit"> Submit </v-btn>

    <v-btn @click="handleReset"> Clear </v-btn>
  </form>
</template>

<style scoped lang="scss">
.form {
  padding: 24px;
}
</style>
