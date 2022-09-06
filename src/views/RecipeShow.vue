<template lang="">
    <NavBar></NavBar>
</template>
<script>
import NavBar from '@/components/NavBar.vue';
export default {
    name: "RecipeShow",
    components: {
        NavBar
    },
    created() {
        //this.$store.dispatch('getRecipes', ['Recette', 3, 'Recipes']);
        this.$store.dispatch('getItems', ['Recette_has_Ingredient', 10, 'RecipesIngredients']);
        //this.$store.dispatch('getIngredients');
        //this.$store.dispatch('getSteps');
        //this.$store.dispatch('getRecipesIngredients');
    },
}
</script>
<style scoped>
</style>