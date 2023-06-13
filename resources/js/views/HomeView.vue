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
import NavBar from "../components/NavBar.vue";
import {onMounted} from "vue";
import {useUserStore} from "../store/user.js";


const store = useUserStore();


</script>

<style scoped>

</style>
