<template>
    <div>
        <button class="button" @click="click">{{ value }}</button>
    </div>
</template>
<script>
export default {
    props: {
        value: String,
    },
    methods: {
        click() {
            this.$emit('someclick');
        }
    }
}
</script>
<style>
.button {
    background-color: lightgray;
}
</style>