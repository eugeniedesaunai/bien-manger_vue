<template>
    <div class="input-field col s12">
        <label :for=fname>{{ content }}</label>
        <input class="validate" v-model="value" @change="SelectInput" type="text" :id=fname :name=fname required=""
            aria-required="true">
    </div>
</template>
<script>
export default {
    props: {
        fname: String,
        content: String,
    },
    methods: {
        SelectInput() {
            this.$emit('selectInput', this.value);
        }
    },
}
</script>
<style>
input[type="text"]:not(.browser-default) {
    margin-bottom: 2.5em;
}
</style>