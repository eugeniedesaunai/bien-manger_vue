<template>
  <NavBar :isHomePage="true"></NavBar>
  <HomeBanner></HomeBanner>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue';
import HomeBanner from '@/components/Home/HomeBanner.vue';

export default {
  name: 'HomeView',
  components: {
    NavBar,
    HomeBanner
  }
}
</script>

<style>
</style>