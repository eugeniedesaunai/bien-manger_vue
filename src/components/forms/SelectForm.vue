<template>
    <div class="input-field col s12">
        <label class="label" :for=fname>{{content}}</label>
        <select class="validate" required="" aria-required="true" v-model="selected" @change="SelectOption($event)"
            :name=fname :id=fname>
            <option v-for="(item) in name" :value="item.id" :id="item.id" :key="item.id">{{ item.name
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
        func: String,
    },
    methods: {
        // Récuparation de la selection
        SelectOption(event) {
            console.log(event.target.value);
            this.$emit('selectOption', event.target.value)
        }
    },
    computed: {
        name() {
            return this.$store.getters[this.fname + '/getName'];
        }
    },
    created() {
        this.$store.dispatch(this.fname + '/' + this.func);
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