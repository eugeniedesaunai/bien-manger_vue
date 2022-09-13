<template>
    <div class="input-field col s12">
        <label class="label" for='meal'>Plat</label>
        <select class="validate" required="" aria-required="true" v-model="selected" @change="SelectOption($event)"
            name='meal' id='meal'>
            <option v-for="(item) in name" :value="item.name" :key="item.id">{{ item.name
            }}
            </option>
        </select>

    </div>
</template>
<script>
export default {
    data() {
        return {
            name: []
        }
    },
    methods: {
        SelectOption(event) {
            this.$emit('selectOption', event.target.value)
        }
    },
    created() {
        this.$store.dispatch('meal/checkMeal');
        this.name = this.$store.getters['meal/getName'];
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


.input-field .label {
    margin-top: -3em;
}
</style>