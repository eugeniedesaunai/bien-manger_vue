<template>
    <div class="file-field input-field col s12">
        <div class="btn bgDarkGreenColor">
            <span>{{content}}</span>
            <input type="file" @change="selectInput" :name=fname :id=fname>
        </div>
        <div class="file-path-wrapper">
            <input class="file-path validate" type="text">
        </div>
    </div>
</template>
<script>
export default {
    props: {
        fname: String,
        content: String,
    },
    methods: {
        selectInput(event) {
            this.$emit('selectInput', event.target.files);
        }
    },
}
</script>