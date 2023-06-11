<template>
    <v-app>
        <v-layout>
            <RouterView />
        </v-layout>
    </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
    name: "App",
    components: {NavBar}
}
</script>

<style scoped>

</style>
