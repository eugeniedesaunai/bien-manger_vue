<template>
  <div>
        <NavBar :isHomePage="false"></NavBar>
            <SeasonSelection @seasonSelection='getSeasonId'>
            </SeasonSelection>
            <IngredientCarousel>
            </IngredientCarousel>
            <RecipeCarousel :seasonId='seasonId'>
            </RecipeCarousel>
  </div>
</template>

<script>
// @ is an alias to /src
import SeasonSelection from '@/components/SearchBySeason/SeasonSelection.vue'
import IngredientCarousel from '@/components/SearchBySeason/IngredientCarousel.vue'
import NavBar from '@/components/NavBar.vue'
import RecipeCarousel from '@/components/RecipeCarousel.vue'

export default {
  name: 'SearchBySeason',
  data(){
    return{
      seasonId:'',
    }
  },
  props:{
  },
  components: {
    SeasonSelection,
    IngredientCarousel,
    NavBar,
    RecipeCarousel
  },
  methods:{
      getSeasonId(value){
        this.seasonId=value;
      }
  }
}
</script>
