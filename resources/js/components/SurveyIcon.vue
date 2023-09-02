<template>
    <div class="icon-border d-flex justify-center align-center">
        <v-icon :icon="iconName" :size="iconSize" :color="iconColor" />
    </div>
</template>

<script>
export default {
    name: "SurveyIcon",
    props: {
        iconName: {
            type: String,
            required: true
        },
        iconColor: {
            type: String,
            required: true
        },
        iconSize: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>

.icon-border{
    background-color: #90EE90;
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
</style>
