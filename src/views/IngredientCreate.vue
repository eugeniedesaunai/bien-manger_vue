<template lang="">
<NavBar class="fixed"></NavBar>
<div class="flex column widthForm alignCenter spaceAround">
    <IngredientSelect  v-for="(ingredient, i) in newIngredients" :key="i"  class="taille" v-model:ingredientRecette="newIngredients[i]"></IngredientSelect>  
    <input @click="addFormNewIngredient"  type="button" value="+">
    <input @click="addIngredient"  type="submit" value="envoyer">
</div>
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
            window.location.href = '/recipe/create/Steps';
        },
        addFormNewIngredient: function () {
            this.newIngredients.push({ ...this.ingredientRecette })
        },
        addIngredient() {

            this.$store.dispatch("ingredient/addNewQuantity", this.ingredientRecette)
            this.redirect()
        },
    },

}
</script>
<style scoped>
.taille {
    width: 30vw;
}

.fixed {
    position: fixed;
}
</style>