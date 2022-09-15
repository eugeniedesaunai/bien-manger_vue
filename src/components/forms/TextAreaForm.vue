<template>
    <div class="input-field col s12 ">
        <label class="textarea" :for=fname>{{content}}</label>
        <textarea class="validate" v-model="value" @change="getValue" :name=fname :id=fname cols="30"
            rows="10"></textarea>
    </div>
</template>
<script>
export default {
    props: {
        fname: String,
        content: String
    },
    methods: {
        getValue() {
            this.$emit('selectTextarea', this.value)
        }
    }
}
</script>
<style>
.textarea {
    margin-top: -3em;
}
</style>