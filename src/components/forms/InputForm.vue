<template>
    <div>
        <label :for=fname>{{ content }}</label>
        <input v-model="value" @change="SelectInput" type="text" :id=fname :name=fname>
    </div>

</template>
<script>
export default {
    props: {
        fname: String,
        content: String
    },
    methods: {
        SelectInput() {
            this.$emit('selectInput', this.value);
        }
    },

}
</script>
<style>
</style>