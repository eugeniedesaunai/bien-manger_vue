<template lang="">
<NavBar class="fixed"></NavBar>
<section class="flex column widthForm alignCenter spaceAround">
<article>
     <IngredientSelect  v-for="(ingredient, i) in newIngredients" :key="i"  class="taille marginForm" v-model:ingredientRecette="newIngredients[i]"></IngredientSelect>  
</article>
    <a @click="addFormNewIngredient" class="btn-floating btn-large waves-effect waves-light bgDarkGreenColor marginButton"><i class="material-icons">add</i></a>
    <input class="buttonForm greenColor textUppercase marginButton" @click="addIngredient"  type="submit" value="envoyer" href="">
</section>
<HomeFooter></HomeFooter>
</template>
<script>

import IngredientSelect from '@/components/forms/IngredientSelect.vue'
import NavBar from '@/components/NavBar.vue';
import HomeFooter from '@/components/Home/Footer.vue';
export default {
    name: 'IngredientCreate',
    components: {
        IngredientSelect,
        NavBar,
        HomeFooter
    },
    data() {
        return {
            recipeId: '',
            newRecipe: JSON.parse(localStorage.getItem('recipe')),
            ingredientRecette: { ingredient: undefined, quantity: 0, unit: undefined },
            newIngredients: [{ recette: undefined, ingredient: undefined, quantity: 0, unit: undefined }],
        }
    },
    methods: {

        redirect() {
            this.$router.push({ name: 'stepsCreate' })
        },
        addFormNewIngredient: function () {
            this.newIngredients.push({});
        },
        addIngredient() {
            this.$store.dispatch("ingredient/addNewQuantity", this.ingredientRecette)
            this.newIngredients.push({ ...this.ingredientRecette })

            for (let i = 0; i < this.newIngredients.length; i++) {
                this.recipeId = this.$store.getters['recipe/getRecipePerName'](this.newRecipe.name);
                this.newIngredients[i].recette = this.recipeId.id;
                this.$store.dispatch("ingredient/addNewQuantity", this.newIngredients[i])
            }
            this.redirect()
        },
    },
    created() {
        this.$store.dispatch('recipe/checkRecipe');
    },

}
</script>
<style scoped>

</style>