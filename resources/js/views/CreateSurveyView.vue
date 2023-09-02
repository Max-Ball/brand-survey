<template>
    <AppLayout>
        <template #default>
            <v-row>
                <v-col cols="6">
                    <v-card height="80vh">
                        <v-card-item>
                            <component :is="currentStepComponent" :formTitle="formTitle" />
                        </v-card-item>
                        <v-card-actions>
                            <v-btn @click="previousStep" :disabled="currentStep === 0">Previous</v-btn>
                            <v-spacer />
                            <v-btn @click="nextStep" :disabled="currentStep === steps.length - 1">Next</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </template>
    </AppLayout>
</template>

<script>
import AppLayout from "../components/AppLayout.vue";
import {computed, ref} from "vue";
import SurveyFormStep1 from "../components/SurveyFormStep1.vue";
import SurveyFormStep2 from "../components/SurveyFormStep2.vue";
import SurveyFormStep3 from "../components/SurveyFormStep3.vue";
export default {
    components: {
        AppLayout,
        SurveyFormStep1,
        SurveyFormStep2,
        SurveyFormStep3,
        // Import other step components here
    },
    setup() {
        const currentStep = ref(0);
        const formTitle = computed(() => {
            if (currentStep.value === 0) {
                return "Title Your Survey";
            } else if (currentStep.value === 1) {
                return "Build Your Questions";
            } else if (currentStep.value === 2) {
                return "Step 3";
            }
        })
        const steps = [SurveyFormStep1, SurveyFormStep2, SurveyFormStep3 ];
        const currentStepComponent = computed(() => {
            return steps[currentStep.value];
        });

        const nextStep = () => {
            if (currentStep.value < steps.length - 1) {
                currentStep.value++;
            }
        };
        const previousStep = () => {
            if (currentStep.value > 0) {
                currentStep.value--;
            }
        };

        return {
            currentStep,
            currentStepComponent,
            steps,
            formTitle,
            nextStep,
            previousStep,
        };
    },
};

</script>

<style scoped>

</style>
