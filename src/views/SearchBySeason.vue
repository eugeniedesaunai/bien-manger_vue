<template>
  <div>
    <NavBar :isHomePage="false"></NavBar>
    <SeasonSelection @seasonSelection='getSeasonId'>
    </SeasonSelection>
    <RecipeCarousel :seasonId='seasonId'>
    </RecipeCarousel>
  </div>
  <HomeFooter></HomeFooter>
</template>

<script>
// @ is an alias to /src
import SeasonSelection from '@/components/SearchBySeason/SeasonSelection.vue'
import NavBar from '@/components/NavBar.vue'
import RecipeCarousel from '@/components/RecipeCarousel.vue'
import HomeFooter from '@/components/Home/Footer.vue';
export default {
  name: 'SearchBySeason',
  data() {
    return {
      seasonId: '',
    }
  },
  props: {
  },
  components: {
    SeasonSelection,
    NavBar,
    RecipeCarousel,
    HomeFooter
  },
  methods: {
    getSeasonId(value) {
      this.seasonId = value;
    }
  }
}
</script>
