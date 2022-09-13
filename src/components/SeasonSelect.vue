<template>
    <div class="input-field col s12">
        <label class="label" for='season'>Saison</label>
        <select class="validate" aria-required="true" v-model="selected" @change="SelectOption($event)" name='season'
            id='season'>
            <option v-for="(item) in name" :value="item.name" :key="item.id">{{item.name}}</option>
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
    updated() {


    },
    created() {
        this.$store.dispatch('season/checkSeason');
        this.name = this.$store.getters['season/getName'];
    },
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