<template>
    <v-app-bar
        color="grey"
        height="48"
        flat
    >App bar</v-app-bar>
    <NavBar />
    <v-main>
        <v-container>

        </v-container>
    </v-main>
</template>

<script setup>
import {useSurveyStore} from "../store/survey.js";
import NavBar from "../App.vue";

const store = useSurveyStore();

</script>

<style scoped>

</style>
