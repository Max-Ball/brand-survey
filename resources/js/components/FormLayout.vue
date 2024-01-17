<template>
    <v-form @change="updateSurvey" class="d-flex flex-column justify-center">
        <div class="text-center font-weight-bold text-xl my-16">
            {{formTitle}}
        </div>
        <slot name="form-content" :survey="survey"></slot>
    </v-form>
</template>

<script setup>

import {ref} from "vue";

defineProps({
    formTitle: {
        type: String,
        required: true,
    },
})
const survey = ref({});

const emit = defineEmits(["update-survey"]);
function updateSurvey(){
    emit("update-survey", survey);
    console.log('getting here', survey);
}
</script>

<style scoped>

</style>
