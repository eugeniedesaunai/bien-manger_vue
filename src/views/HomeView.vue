<template>
  <NavBar :isHomePage="true"></NavBar>
  <HomeBanner></HomeBanner>
  <SectionMonthRecipeSearchForm></SectionMonthRecipeSearchForm>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue';
import HomeBanner from '@/components/Home/HomeBanner.vue';
import SectionMonthRecipeSearchForm from '@/components/Home/SectionMonthRecipeSearchForm.vue';


export default {
  name: 'HomeView',
  components: {
    NavBar,
    HomeBanner,
    SectionMonthRecipeSearchForm,

  }
}
</script >

<style scoped>
</style>