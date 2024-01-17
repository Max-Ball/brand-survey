<template>
    <AppLayout>
        <template #default>
            <!-- Main content goes here -->
            <v-row>
                <v-col cols="6" md="6" lg="3">
                    <SurveyCard
                        :title="'Total Surveys'"
                        :surveys="surveys"
                        :backgroundColor="iconBackgroundColorBlue">
                        <template v-slot:icon>
                            <v-icon
                                icon="mdi-text-box-multiple"
                                size="20px"
                                color="#00008B" />
                        </template>
                    </SurveyCard>
                </v-col>
                <v-col cols="6" md="6" lg="3">
                    <router-link :to="{ name: 'SurveyView' }">
                        <SurveyCard
                            :title="'Active Surveys'"
                            :surveys="activeSurveys"
                            :backgroundColor="iconBackgroundColorPink">
                            <template v-slot:icon>
                                <v-icon
                                    icon="mdi-text-box-multiple-outline"
                                    size="20px"
                                    color="#8B0000" />
                            </template>
                        </SurveyCard>
                    </router-link>
                </v-col>
                <v-col cols="6" md="6" lg="3">
                    <router-link :to="{ name: 'CreateSurveyView' }">
                        <v-card class="dashboard-card d-flex align-center">
                            <SurveyIcon iconName="mdi-text-box-plus" iconSize="20px" iconColor="#006400" />
                            <div>
                                <v-card-title class="pb-0"><b>Create</b></v-card-title>
                                <v-card-text>
                                    <p>New Survey</p>
                                </v-card-text>
                            </div>
                        </v-card>
                    </router-link>
                </v-col>
            </v-row>
            <v-row>
                <!-- Responses Analysis Card -->
                <v-col cols="12" md="6" lg="8">
                    <v-card class="dashboard-card responses-analysis-card">
                        <v-card-title class="card-title">Responses Analysis</v-card-title>
                        <v-card-text>
                            <p class="card-text">Average completion rate: 75%</p>
                            <p class="card-text">Highest response: Survey A</p>
                            <p class="card-text">Lowest response: Survey B</p>
                        </v-card-text>
                    </v-card>
                </v-col>

                <!-- Recent Surveys Card -->
                <v-col cols="12" md="6" lg="3">
                    <v-card class="dashboard-card recent-surveys-card">
                        <v-card-title class="card-title">Recent Surveys</v-card-title>
                        <v-card-text>
                            <ul class="recent-surveys-list">
                                <li class="recent-survey-item">Survey C</li>
                                <li class="recent-survey-item">Survey D</li>
                                <li class="recent-survey-item">Survey E</li>
                                <!-- Add more survey items here... -->
                            </ul>
                        </v-card-text>
                    </v-card>
                </v-col>
                <!-- Most Active Users Card -->
                <v-col cols="12" md="6" lg="3">
                    <v-card class="dashboard-card active-users-card">
                        <v-card-title class="card-title">Most Active Users</v-card-title>
                        <v-card-text>
                            <ul class="active-users-list">
                                <li class="active-user-item">User A</li>
                                <li class="active-user-item">User B</li>
                                <li class="active-user-item">User C</li>
                                <!-- Add more user items here... -->
                            </ul>
                        </v-card-text>
                    </v-card>
                </v-col>

                <!-- Survey Categories Card -->
                <v-col cols="12" md="6" lg="6">
                    <v-card class="dashboard-card survey-categories-card">
                        <v-card-title class="card-title">Survey Categories</v-card-title>
                        <v-card-text>
                            <p class="card-text">Category A: 20 surveys</p>
                            <p class="card-text">Category B: 15 surveys</p>
                            <p class="card-text">Category C: 10 surveys</p>
                            <!-- Add more category entries here... -->
                        </v-card-text>
                    </v-card>
                </v-col>

                <!-- Survey Completion Trends Card -->
                <v-col cols="12" md="12" lg="3">
                    <v-card class="dashboard-card completion-trends-card">
                        <v-card-title class="card-title">Survey Completion Trends</v-card-title>
                        <v-card-text>
                            <!-- Add chart or data visualization for trends... -->
                        </v-card-text>
                    </v-card>
                </v-col>

            </v-row>
        </template>
    </AppLayout>
</template>

<script setup>
import {computed, onMounted} from "vue";
import {useUserStore} from "../store/user.js";
import {surveysService} from "../services/SurveysService.js";
import {useSurveyStore} from "../store/survey.js";
import SurveyCard from "../components/SurveyCard.vue";
import AppLayout from "../components/AppLayout.vue";
import SurveyIcon from "../components/SurveyIcon.vue";


const user = useUserStore();
const surveys = computed(()=> useSurveyStore().surveys);
const activeSurveys = computed(()=> surveys.value.filter(survey => survey.status === 1))

const iconBackgroundColorPink = "#FFB6C1";
const iconBackgroundColorBlue = "#ADD8E6";

async function getSurveys() {
    try{
        await surveysService.getSurveys()
    }
    catch (error) {
        console.error(error);
    }
}

onMounted(() => {
    getSurveys()
});



</script>

<style scoped>
.dashboard-card {
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Add more styles for other card types as needed */
</style>
