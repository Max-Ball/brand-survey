<template>
    <FormLayout form-title="survey title">
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

<script>
import { ref } from "vue";
import BaseTextField from "./BaseTextField.vue";
import BaseTextArea from "./BaseTextArea.vue";
import FormLayout from "./FormLayout.vue";

export default {
    components: {
        BaseTextField,
        BaseTextArea,
        FormLayout,
    },
    setup() {
        const survey = ref({
            title: "",
            description: "",
        })
        return {
            survey,
        }
    }
}
</script>

<style scoped>

</style>
