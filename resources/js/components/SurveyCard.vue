<template>
            <v-card
                class="dashboard-card d-flex align-center">
                <div class="icon-border d-flex justify-center align-center" :style="iconBackgroundColor">
                    <slot name="icon" />
                </div>

                <div>
                    <v-card-title class="pb-0"><b>{{surveys.length}}</b></v-card-title>
                    <v-card-text>
                        <p>{{title}}</p>
                    </v-card-text>
                </div>
            </v-card>
</template>

<script>
import SurveyIcon from "./SurveyIcon.vue";

export default {
    name: "SurveyCard",
    components: {SurveyIcon},
    props: {
        surveys: {
            type: Array,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        backgroundColor: {
            type: String,
            required: true
        }
    },

    computed: {
        iconBackgroundColor() {
            return {
                backgroundColor: this.backgroundColor,
            };
        },
    },
}
</script>

<style scoped>

.icon-border{
    width: 50px;
    height: 50px;
    border-radius: 50%;
}

</style>
