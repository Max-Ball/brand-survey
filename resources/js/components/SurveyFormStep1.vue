<template>
    <FormLayout form-title="survey title">
        <template #form-content="{survey}">
            <BaseTextField
                class="mb-10"
                v-model="survey.title"
                label="Survey Title"
                required
                />
            <BaseTextArea
                v-model="survey.description"
                label="Survey Description"
                required />
            <BaseCheckBox
                v-model="survey.active"
                label="Set this survey to active?"
            />
        </template>
    </FormLayout>
</template>

<script setup>
import BaseTextField from "./BaseTextField.vue";
import BaseTextArea from "./BaseTextArea.vue";
import FormLayout from "./FormLayout.vue";
import BaseCheckBox from "./BaseCheckBox.vue";


</script>

<style scoped>

</style>
