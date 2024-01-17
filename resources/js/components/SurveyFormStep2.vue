<template>
    <FormLayout form-title="questions">
        <template #form-content="{survey}">
            <!-- Render existing questions -->
            <div v-for="(question, index) in survey.questions" :key="index">
                <BaseTextField
                    class="mb-10"
                    v-model="question[index]"
                    :label="`Question ${index + 1}`"
                    required
                />
            </div>
            <!-- Render the text fields -->


            <v-btn class="bg-blue-grey mb-10 justify-center" @click="addQuestion(survey)">Add Question</v-btn>
        </template>
    </FormLayout>
</template>

<script setup>
import BaseTextField from "./BaseTextField.vue";
import FormLayout from "./FormLayout.vue";

const newQuestion = []

function addQuestion(survey){
    // survey.questions.push(question)
    console.log(survey, 'new question')
}
</script>

<style scoped>

</style>
