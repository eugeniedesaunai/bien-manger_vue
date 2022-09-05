<template>
    <div class="input-field col s12">
        <label class="label" :for=fname>{{ content }}</label>
        <select class="validate" required="" aria-required="true" v-model="selected" @change="SelectOption" :name=fname
            :id=fname>
            <option v-for="(option, index) in options" :value="option" :key="index">{{ option
            }}
            </option>

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
select {
    display: block;
    color: var(--color-gray);
    border-bottom: 1px solid var(--color-gray);
    background-color: var(--body-bg);
    border-color: var(--body-bg);
}

select:hover {}

.input-field .label {
    margin-top: -3em;
}
</style>