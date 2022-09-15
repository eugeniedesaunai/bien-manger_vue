<template>
    <div>
        <input type="button" class="button" @click="click" :value=value />
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
<style scoped>
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