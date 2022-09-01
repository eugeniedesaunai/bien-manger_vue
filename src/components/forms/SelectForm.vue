<template>
    <div>
        <label :for=fname>{{ content }}</label>
        <select v-model="selected" @change="SelectOption" :name=fname :id=fname>
            <option v-for="(option, index) in options" :value="option" :key="index">{{ option }}</option>
        </select>
    </div>
</template>
<script>
export default {
    props: {
        fname: String,
        content: String,
        options: Array
    },
    methods: {
        SelectOption() {
            this.$emit('selectOption', this.selected)
        }
    }
}
</script>
<style>
</style>