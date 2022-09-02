<template lang="">
<section>
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
section {
    position: relative;
    z-index: 0;
    width: 100vw;
    height: 120vh;
    background-color: #D9D3CC;
}
</style>