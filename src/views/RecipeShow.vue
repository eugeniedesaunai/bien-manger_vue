<template lang="">
    <NavBar class="navBar"></NavBar>
    <section class="flex">
    <article>
        <div class="imgRecipe" :style="cssProps"></div> 
    </article>
    <article class="flex column spaceAround paddingRecipe">
         <h1>{{ getRecipes?.Name }} </h1>
         <div class="flex spaceAround">
             <ul>
            <li>{{getSeason?.name}}</li>
            <li v-for="meal in getRecipes?.meal" :key='meal'>{{meal?.Name}}</li>
         </ul>
           <ul>
            <li v-for="ingredient in getRecipes?.ingredients" :key="ingredient">
            {{getIngredient(ingredient?.id)}}
            </li>
           </ul>
         </div>
        <p>{{getRecipes?.Description}}</p>
           <ul v-for="step in getRecipes?.steps" :key='step'>
            <li>
                {{step?.NoEtape}}.{{step?.Name}}:<br>
                {{step?.Description}}
            </li>
            </ul>
    </article>
    </section>

          
</template>
<script>
import NavBar from '@/components/NavBar.vue';
export default {
    name: "RecipeShow",
    data() {
        return {
            result: '',
            id: this.$route.params.id,

        }
    },
    components: {
        NavBar,
    },
    computed: {
        getRecipes(){
            return this.$store.getters['recipe/getRecipePerId'](this.id);
        },
        cssProps() {
            let r = this.$store.getters['recipe/getRecipePerId'](this.id);
            let css = '';
            if (r && r.images && r.images.length > 0) { css= "background-image: url('" + r?.images[0]?.url + "')" }
            return css;
        },
        getSeason(){
            return this.$store.getters['season/getSeasonsPerId'](this.getRecipes?.Saison[0]);
        },
        getIngredient: () => (ingredientId) => {
            //console.log(this.$store.getters['ingredient/getIngredientsPerId'](ingredientId));
            return ingredientId
        }
    },
    created() {
        this.$store.dispatch('recipe/checkRecipe');
        this.$store.dispatch('season/checkSeason');
        this.$store.dispatch('ingredient/checkIngredient');
    },
}
</script>

<style scoped>
.paddingRecipe {
    padding: 2rem;
}

.imgRecipe {
    width: 40vw;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: var(--img-recipe);
}

section {
    height: 100%;
}
</style>