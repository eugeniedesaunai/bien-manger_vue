<template lang="">
<section class="mounthAndSearch">
<MonthRecipe></MonthRecipe>
<SearchForm></SearchForm>
  </section>
</template>
<script>
import MonthRecipe from '@/components/Home/MonthRecipe.vue';
import SearchForm from '@/components/Home/SearchForm.vue';
export default {
  name: "SectionMonthRecipeSearchForm",
  components: { MonthRecipe, SearchForm }
}
</script>
<style scoped>
.mounthAndSearch {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 100vw;
}

@media(min-width: 768px) {

  .mounthAndSearch {
    justify-content: space-around;

  }
}

@media(min-width: 1280px) {

  .mounthAndSearch {
    justify-content: space-around;

  }
}
</style>