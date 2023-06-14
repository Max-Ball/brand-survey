<template>
    <NavBar />
    <h1>Survey View</h1>
    <SurveyCard />
</template>

<script>
import SurveyCard from "../components/SurveyCard.vue";
import NavBar from "../components/NavBar.vue";

export default {
    name: "SurveyView",
    components: {NavBar, SurveyCard}
}
</script>

<style scoped>

</style>
