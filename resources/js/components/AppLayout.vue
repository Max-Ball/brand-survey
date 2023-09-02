<template>
    <AppBar />
    <NavBar />
        <v-container class="mt-16">
            <slot></slot>
        </v-container>
</template>

<script setup>
import AppBar from "./AppBar.vue";
import NavBar from "./NavBar.vue";

</script>

<style scoped>

</style>
