<template>
    <div>
        <input type="button" class="button" @click="click" v-model="value" />
    </div>
</template>
<script>
export default {
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
    width: fit-content;
}

.button:hover {
    background-color: black;
    color: var(--color-gray);
    cursor: pointer;
}
</style>