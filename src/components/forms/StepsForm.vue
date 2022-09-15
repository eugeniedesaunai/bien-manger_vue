<template lang="">
    <div>        
        <label for="">Etape n° : </label>
        <input type="number" name="" id="" :value="stepsRecipes.stepNumber" @input="setStepNumber($event.target.value)" >
        <label for=""> Nom de l'Etape:</label>
        <input  type="text" name="" id="" :value="stepsRecipes.name" @input="setName($event.target.value)">
        <label for=""> Description de l'Etape:</label>
     <textarea  class="materialize-textarea" name="" id="" cols="10" rows="10" :value="stepsRecipes.description" @input="setDescription($event.target.value)"></textarea>
    </div>
</template>
<script>
export default {
    name: 'StepsForm',
    data() {
        return {
            values: this.stepsRecipes,
        }
    },
    props: {
        stepsRecipes: {
            type: Object
        }
    },
    methods: {
        setStepNumber(stepNumber) {
            this.values.stepNumber = stepNumber;
            this.$emit('update:stepsRecipes', this.values)
        },
        setName(name) {
            this.values.name = name;
            this.$emit('update:name', this.values)
        },
        setDescription(description) {
            this.values.description = description;
            this.$emit('update:description', this.values)
        },
    }
}
</script>
<style scoped>

</style>