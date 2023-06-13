<template>
    <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
    >
        <v-list-item
            variant="text"
            prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
            title="Max Ball"
            nav
        >
            <template v-slot:append>
                <v-btn
                    variant="text"
                    icon="mdi-chevron-left"
                    @click.stop="rail = !rail"
                ></v-btn>
            </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
            <v-list-item prepend-icon="mdi-text-box-multiple-outline" title="Surveys" value="surveys"></v-list-item>
            <v-list-item @click="logoutUser" prepend-icon="mdi-logout" title="Surveys" value="surveys"></v-list-item>
        </v-list>
    </v-navigation-drawer>
    <v-main style="height: 250px"></v-main>
</template>

<script setup>

import {usersService} from "../services/UsersService.js";
import router from "../route.js";
import {useUserStore} from "../store/user.js";

let rail = true
let drawer = true

async function logoutUser(){
    try{
        await usersService.logoutUser()
        await router.push({name: 'LoginView'})
    }
    catch (error) {
        console.log('error logging out user', error)
    }
}

</script>

<style scoped>

</style>
