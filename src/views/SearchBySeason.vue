<template>
  <div>
        <NavBar :isHomePage="false"></NavBar>
            <SeasonSelection>
            </SeasonSelection>
            <IngredientCarousel>
            </IngredientCarousel>
            <RecipeCarousel>
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
  components: {
    SeasonSelection,
    IngredientCarousel,
    NavBar,
    RecipeCarousel
  }
}
</script>
