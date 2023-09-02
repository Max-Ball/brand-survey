<template>
    <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent="true"
        @click="rail = false"
    >
        <v-list-item
            variant="text"
            prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
            title="Max Ball"
            nav="true"
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

        <v-list density="compact" nav="true">
            <router-link :to="{name: 'HomeView'}">
                <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
            </router-link>
            <router-link :to="{name: 'AccountView'}">
                <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
            </router-link>
            <router-link :to="{name: 'SurveyView'}">
                <v-list-item prepend-icon="mdi-text-box-multiple-outline" title="Surveys" value="surveys"></v-list-item>
            </router-link>
            <v-list-item @click="dialog = true" prepend-icon="mdi-logout" title="Logout" value="logout"></v-list-item>
        </v-list>
        <div class="text-center">
            <v-dialog
                v-model="dialog"
                width="auto"
            >
                <v-card>
                    <v-card-text>
                        Are you sure you want to logout?
                    </v-card-text>
                    <v-card-actions class="justify-center">
                        <v-btn color="secondary" @click="logoutUser">Yes</v-btn>
                        <v-btn color="red" @click="dialog = false">No</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </div>
    </v-navigation-drawer>
    <v-main style="height: 250px"></v-main>
</template>

<script setup>

import {usersService} from "../services/UsersService.js";
import router from "../route.js";
import {ref} from "vue";

const rail = ref(true);
const drawer = ref(true)
const dialog = ref(false)

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
