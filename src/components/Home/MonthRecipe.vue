<template lang="">
<h2 class="titleFont widthTitle">Recettes du mois</h2>
    <article class="recipesMounth">
       <MiniRecipe v-for="i in 3" :key="i"></MiniRecipe>
    </article>
</template>
<script>
import MiniRecipe from '@/components/MiniRecipe.vue';
export default {
    name: 'MonthRecipe',
    components: { MiniRecipe }
}
</script>
<style scoped>
.recipesMounth {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

h2 {
    align-self: center;
    margin: 0;
    margin-top: 5rem;
    margin-bottom: 3rem;
}

@media(min-width: 768px) {

    .recipesMounth {
        width: 100vw;
        flex-direction: row;
        justify-content: space-around;
    }

    h1 {
        margin-top: 8rem;
        margin-bottom: 3rem;
    }
}

/* @media(min-width: 1280px) {
    .recipesMounth {
      
    }
} */
</style>