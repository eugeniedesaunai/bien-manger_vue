<template lang="">   
<NavBar></NavBar>
    <section class="flex column widthForm alignCenter spaceAround">
    <StepsForm class="taille"  v-for="i in newStep" :key="i" v-model:stepsRecipes="stepsRecipes"></StepsForm>
    <input @click="addNewFormStep"  type="button" value="+">
    <input type="submit" value="" @click="addSteps">
    </section>
   
</template>
<script>
import NavBar from '@/components/NavBar.vue';
import StepsForm from '@/components/forms/StepsForm.vue';
export default {
    name: 'StepsCreate',
    components: {
        NavBar,
        StepsForm

    },
    data() {
        return {
            newRecipe: JSON.parse(localStorage.getItem('recipe')),
            newStep: [{}],
            stepsRecipes: { name: undefined, stepNumber: 0, description: undefined },
            ingredientRecette: JSON.parse(localStorage.getItem('ingredients'))
        }
    },
    methods: {
        addNewFormStep: function () {
            this.newStep.push({})
        },
        addSteps() {
            console.log(this.stepsRecipes)
            this.newRecipe.steps = this.stepsRecipes;
            console.log(this.newRecipe);
            this.$store.dispatch("recipe/addRecipes", this.newRecipe);
            this.$store.dispatch("recipe/addSteps", this.stepsRecipes);

        },
    }
}
</script>
<style scoped>
.taille {
    width: 30vw;
}
</style>