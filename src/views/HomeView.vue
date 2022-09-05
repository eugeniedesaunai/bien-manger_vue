<template>
  <div class="bouton">
    <!-- Importez votre icone 
   <img src="arrow-up-solid.svg" class="icone">
   -->
    <img class="icone" src="@/assets/fleche.png" alt="">
  </div>
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
.bouton {
  height: 50px;
  width: 50px;
  background: rgba(224, 242, 196, 0.9);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 2;
  bottom: 3%;
  right: 3%;
  cursor: pointer;
  visibility: hidden;
}

.icone {
  width: 50px;
}

@media(min-width: 768px) {
  .bouton {
    height: 80px;
    width: 80px;

  }
}

@media(min-width: 1280px) {
  .bouton {
    height: 100px;
    width: 100px;
  }
}
</style>