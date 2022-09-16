<template>
    <div>
        <input type="button " class="buttonForm greenColor textUppercase marginButton textCenter" @click="click"
            :value=value />
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
.buttonForm {
    width: auto;
}
</style>