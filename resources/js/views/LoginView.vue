<template>
    <v-container class="fill-height" fluid>
        <v-row align="center" justify="center" dense>
            <v-col cols="12" sm="8" md="4" lg="4">
                <v-card elevation="0">
                    <a href="#" title="Logo Placeholder" target="_blank">
                        <v-img src="https://picsum.photos/200/300" alt="Logo Placeholder" height="200"></v-img>
                    </a>
                    <v-card-text>
                        <v-form>
                            <v-text-field label="Enter your email" name="email" prepend-inner-icon="mdi-email" type="email" class="rounded-0" outlined></v-text-field>
                            <v-text-field label="Enter your password" name="password" prepend-inner-icon="mdi-lock" type="password" suffix="| Forgot?" class="rounded-0" outlined></v-text-field>
                            <v-btn class="rounded-2 py-4 font-weight-bold" color="suds-dark-blue" block>Login</v-btn>
                            <v-card-actions class="text--secondary">
                                <v-checkbox color="#000000" label="Remember me"></v-checkbox>
                            </v-card-actions>
                        </v-form>
                        <v-spacer></v-spacer>
                            No account?
                        <router-link :to="{ name: 'RegisterView' }">
                            Sign Up
                        </router-link>
                    </v-card-text>
<!--                    <v-card-actions class="ml-6 mr-6 text-center">-->
<!--                        <p>By continuing, you agree to Fedorae Education's <a href="#" class="pl-2" style="color: #000000">Policy</a> and <a href="#" class="pl-2" style="color: #000000">Terms of Use</a></p>-->
<!--                    </v-card-actions>-->
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "LoginView"
}
</script>

<style scoped>

</style>
