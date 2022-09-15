<template lang="">   
<NavBar></NavBar>
<section class="flex">
    <form action=""> 
        <StepsForm class="taille"  v-for="(step,i) in newStep" :key="i" v-model:stepsRecipes="newStep[i]"></StepsForm>
        <input @click="addNewFormStep"  type="button" value="ajouter une étape">
        <input type="submit" value="" @click="addSteps">
    </form>
    <article class="note">
        <ul>
            <li v-for="(step, i) in newStep" :key="i">{{newStep.name}} </li>
        </ul>
    </article>
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
            this.newStep.push({})
        },
        addSteps() {
            console.log(this.stepsRecipes)
            this.$store.dispatch("recipe/addSteps", this.stepsRecipes)
        },
    }
}
</script>
<style scoped>
.taille {
    width: 30vw;
}

.note {
    background-color: bisque;
    width: 30vw;
    height: 50vh;
}
</style>