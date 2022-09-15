<template lang="">
<NavBar class="fixed"></NavBar>
<section class="flex column widthForm alignCenter spaceAround">
<article>
     <IngredientSelect  v-for="(ingredient, i) in newIngredients" :key="i"  class="taille marginForm" v-model:ingredientRecette="newIngredients[i]"></IngredientSelect>  
</article>
    <a @click="addFormNewIngredient" class="btn-floating btn-large waves-effect waves-light bgDarkGreenColor"><i class="material-icons">add</i></a>
    <input class="buttonForm greenColor textUppercase" @click="addIngredient"  type="submit" value="envoyer" href="">
</section>
</template>
<script>

import IngredientSelect from '@/components/forms/IngredientSelect.vue'
import NavBar from '@/components/NavBar.vue';
export default {
    name: 'IngredientCreate',
    components: {
        IngredientSelect,
        NavBar,

    },
    data() {
        return {
            ingredientRecette: { ingredient: undefined, quantity: 0, unit: undefined },
            newIngredients: [{ ingredient: undefined, quantity: 0, unit: undefined }],
        }
    },
    methods: {
        redirect() {
            this.$router.push({ name: 'stepsCreate' })
        },
        addFormNewIngredient: function () {
            this.newIngredients.push({ ...this.ingredientRecette })
        },
        addIngredient() {
            for (let i = 0; i < this.newIngredients.length; i++) {
                this.$store.dispatch("ingredient/addNewQuantity", this.newIngredients[i])
            }
            this.redirect()
        },
    },

}
</script>
<style scoped>
.taille {
    width: 30vw;
}
</style>