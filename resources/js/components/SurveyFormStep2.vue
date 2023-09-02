<template>
    <FormLayout form-title="questions">
        <template #form-content>
            <BaseTextField
                class="mb-10"
                v-model="survey.title"
                label="Survey Title"
                required />
            <BaseTextArea
                v-model="survey.description"
                label="Survey Description"
                required />
        </template>
    </FormLayout>
</template>

<script setup>
import { ref } from "vue";
import BaseTextField from "./BaseTextField.vue";
import BaseTextArea from "./BaseTextArea.vue";
import FormLayout from "./FormLayout.vue";

const survey = ref({
    title: "",
    description: "",
})

</script>

<style scoped>

</style>
