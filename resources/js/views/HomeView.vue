<template>
    <v-app-bar
        color="grey"
        height="48"
        flat
    >App bar</v-app-bar>

    <v-main>
        <v-container>

        </v-container>
    </v-main>
</template>

<script setup>
import {useSurveyStore} from "../store/index.js";

const store = useSurveyStore();

</script>

<style scoped>

</style>
