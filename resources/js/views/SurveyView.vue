<template>
    <AppBar />
    <NavBar />
    <v-main>
        <v-container>
            Survey View
        </v-container>
    </v-main>
</template>

<script>
import SurveyCard from "../components/SurveyCard.vue";
import NavBar from "../components/NavBar.vue";
import AppBar from "../components/AppBar.vue";

export default {
    name: "SurveyView",
    components: {AppBar, NavBar, SurveyCard}
}
</script>

<style scoped>

</style>
