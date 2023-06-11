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
        </v-list>
    </v-navigation-drawer>
    <v-main style="height: 250px"></v-main>
</template>

<script>
export default {
    name: "NavBar",
    data () {
        return {
            drawer: true,
            rail: true,
        }
    },
}
</script>

<style scoped>

</style>
