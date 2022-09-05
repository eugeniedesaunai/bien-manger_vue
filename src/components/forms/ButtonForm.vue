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
    background-color: var(--color-gray);
    display: block;
    margin-top: 2em;
    margin-left: auto;
    margin-right: auto;
    border-radius: 0.5em;
}

.button:hover {
    background-color: black;
    color: var(--color-gray);
}
</style>