<template>
  <div class="bouton" @click='scrollToTopButton' id="backToTop">
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
    SectionMonthRecipeSearchForm
  },
  methods: { 
    scrollToTopButton() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      })
    }  
  },
  created () {
    window.onscroll = function() {
      if (scrollY >= 200) {
        document.getElementById('backToTop').style.visibility = "visible";
      } else {
        document.getElementById('backToTop').style.visibility = "hidden";
      }
    }

  },

  
}
</script >

<style scoped>
.bouton {
  height: 50px;
  width: 50px;
  background: rgba(29, 40, 75, 0.9);
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
    height: 70px;
    width: 70px;
  }
}

@media(min-width: 1280px) {
  .bouton {
    height: 80px;
    width: 80px;
  }
}
</style>