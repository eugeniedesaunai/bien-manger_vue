<template lang="">   
<NavBar></NavBar>
<section class="flex column widthForm alignCenter spaceAround">
    <article>
        <StepsForm class="stepForm  marginForm"  v-for="(step,i) in newStep" :key="i" v-model:stepsRecipes="newStep[i]"></StepsForm>
    </article>
    <a class="btn-floating btn-large waves-effect waves-light bgDarkGreenColor marginButton"  @click="addNewFormStep"  ><i class="material-icons">add</i></a>
    <input class="buttonForm greenColor textUppercase marginButton" type="submit" value="envoyer" @click="addSteps">
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
            ingredientRecette: JSON.parse(localStorage.getItem('ingredients')),
            newStep: [{ name: undefined, stepNumber: 0, description: undefined }],
            stepsRecipes: { name: undefined, stepNumber: 0, description: undefined }
        }
    },
    methods: {
        addNewFormStep: function () {
            this.newStep.push({ ...this.stepsRecipes })
        },
        addSteps() {
            console.log(this.stepsRecipes)
            this.newRecipe.steps = this.stepsRecipes;
            console.log(this.newRecipe);
            this.$store.dispatch("recipe/addRecipes", this.newRecipe);
            for (let i = 0; i < this.newStep.length; i++) {
                this.$store.dispatch("recipe/addSteps", this.newStep[i])
            }

        },
    }
}
</script>
<style scoped>
.stepForm {
    width: 20vw;
}
</style>