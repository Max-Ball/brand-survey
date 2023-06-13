<template>
    <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4" lg="4">
                <h1>{{errors}}</h1>
                <v-card elevation="0">
                    <a href="#" title="Logo Placeholder" target="_blank">
                        <v-img src="https://picsum.photos/200/300" alt="Logo Placeholder" height="200"></v-img>
                    </a>
                    <v-card-text>
                        <v-form @submit.prevent="registerUser">
                            <v-text-field v-model="editable.name" label="Enter your name" name="name" prepend-inner-icon="mdi-account" type="text" class="rounded-0" outlined></v-text-field>
                            <v-text-field v-model="editable.email" label="Enter your email" name="email" prepend-inner-icon="mdi-email" type="email" class="rounded-0" outlined></v-text-field>
                            <v-text-field v-model="editable.password" label="Enter your password" name="password" prepend-inner-icon="mdi-lock" type="password" class="rounded-0" outlined></v-text-field>
                            <v-text-field v-model="editable.confirmPassword" label="Confirm your password" name="confirm-password" prepend-inner-icon="mdi-lock" type="password" class="rounded-0" outlined></v-text-field>
                            <v-btn type="submit" class="rounded-2 py-4 font-weight-bold" color="suds-dark-blue" block>Register</v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import {ref} from "vue";
import {usersService} from "../services/UsersService.js";
import {useRouter} from "vue-router";

const editable = ref({})
const errors = ref('')
const router = useRouter()

async function registerUser(){
    try{
        console.log('hey')
        console.log(editable.value)
        await usersService.registerUser(editable.value)
        await router.push({name: 'HomeView'})
    }
    catch (error) {
        if (error.response.status === 422) {
            errors.value = error.response.data.errors
        }
        console.log('error registering user', error)
    }
}

</script>

<style scoped>

</style>
