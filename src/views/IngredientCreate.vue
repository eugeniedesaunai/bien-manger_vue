<template lang="">
<NavBar></NavBar>
<div>
    <IngredientSelect  v-for="i in newIngredients" :key="i"  class="taille" v-model:ingredientRecette="ingredientRecette"></IngredientSelect>  
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
            newIngredients: [{}],
            ingredientRecette: { ingredient: undefined, quantity: 0 }
        }
    },
    methods: {

        addFormNewIngredient: function () {
            this.newIngredients.push({})
        },
        addIngredient: function () {

        }
    },
}
</script>
<style scoped>
.taille {
    width: 30vw;
}
</style>