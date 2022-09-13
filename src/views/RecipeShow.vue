<template lang="">
    <NavBar></NavBar>
    <article>
        <div class="imgRecipe"></div>
       <p>{{this.$store.getters['season/getSeasons']('Eté')}}</p> 
       <IngredientSelect></IngredientSelect>
      <!--   <select>
            <option v-for="(item, index) in name" :value="index" :key="item.id">{{item.name}}</option>
        </select>
        {{this.$store.getters['season/getName']}}
       <select  name="" id="" >
            <option v-for="(item, index) in name" :value= "index" :key="item.id">{{item.name}}</option>
        </select> 
        <p> {{this.$store.getters['ingredient/listIngredient']}}</p> -->
    </article>
    
</template>
<script>
import NavBar from '@/components/NavBar.vue';
import IngredientSelect from "@/components/forms/IngredientSelect.vue"

export default {
    name: "RecipeShow",
    data() {
        return {
            result: '',
            name: []
        }
    },
    components: {
        NavBar,
        IngredientSelect
    },
    methods: {

    },
    updated() {
        //this.name = this.$store.getters['season/getName'];
        this.name = this.$store.getters['meal/getName'];
    },
    created() {
        this.$store.dispatch('season/checkSeason');
        this.$store.dispatch('meal/checkMeal');
        this.name = this.$store.getters['ingredient/listIngredient'],
            this.$store.dispatch('ingredient/checkIngredient');
    },

}
</script>

<style scoped>
article {
    display: flex;
    flex-direction: column;
    align-items: center;
}

div {
    width: 50vw;
    height: 50vh;
    background-size: cover;
    background-position: center;
}

.imgRecipe {
    background-image: url(../assets/Home/farine.jpg);
}

p {
    width: 60vw;
    height: 20vh;
    background-color: #E0F2C4;
}
</style>