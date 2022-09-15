<template lang="">   
<NavBar></NavBar>
<section class="flex column widthForm alignCenter spaceAround">
    <article>
        <StepsForm class="stepForm  marginForm"  v-for="(step,i) in newStep" :key="i" v-model:stepsRecipes="newStep[i]"></StepsForm>
    </article>
    <a class="btn-floating btn-large waves-effect waves-light bgDarkGreenColor"  @click="addNewFormStep"  ><i class="material-icons">add</i></a>
    <input class="buttonForm greenColor textUppercase" type="submit" value="envoyer" @click="addSteps">
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
            newStep: [{ name: undefined, stepNumber: 0, description: undefined }],
            stepsRecipes: { name: undefined, stepNumber: 0, description: undefined }
        }
    },
    methods: {
        addNewFormStep: function () {
            this.newStep.push({ ...this.stepsRecipes })
        },
        addSteps() {
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