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
            <li>Saison</li>
            <li>Type de plat </li>
         </ul>
           <ul>
            <li>ingredient</li>
            <li>ingredient</li>
            <li>ingredient</li>
            <li>ingredient</li>
            <li>ingredient</li>
            <li>ingredient</li>
           </ul>
         </div>
        <p>{{getRecipes?.Description}}</p>
           <ul v-for="steps in getRecipes?.steps" :key='steps'>
            <li>
                {{steps?.NoEtape}}.{{steps?.Name}}:<br>
                {{steps?.Description}}
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
            return css
        }
    },
    created() {
        this.$store.dispatch('recipe/checkRecipe');
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