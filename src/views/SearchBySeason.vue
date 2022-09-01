<template>
  <div>
        <SeasonSelection>
        </SeasonSelection>
        <IngredientCarousel>
        </IngredientCarousel>
  </div>
</template>

<script>
// @ is an alias to /src
import SeasonSelection from '@/components/SearchBySeason/SeasonSelection.vue'
import IngredientCarousel from '@/components/SearchBySeason/IngredientCarousel.vue'

export default {
  name: 'SearchBySeason',
  components: {
    SeasonSelection,
    IngredientCarousel
  }
}
</script>
