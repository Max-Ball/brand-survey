<template>
    <div class="text-center font-weight-bold text-xl my-16">
        {{formTitle}}
    </div>
    <slot name="form-content"></slot>
</template>

<script>
export default {
    name: "FormLayout",
    props: {
        formTitle: {
            type: String,
            required: true,
        },
    },
}
</script>

<style scoped>

</style>
