<template>
  <div>
        <NavBar :isHomePage="false"></NavBar>
            <SeasonSelection @seasonSelection='getSeasonId'>
            </SeasonSelection>
            <RecipeCarousel :seasonId='seasonId'>
            </RecipeCarousel>
  </div>
</template>

<script>
// @ is an alias to /src
import SeasonSelection from '@/components/SearchBySeason/SeasonSelection.vue'
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
