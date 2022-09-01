<template lang="">
<nav :class="className">
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo center texteColor">CuisiSaison</a>
     <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="left  hide-on-med-and-down flexArround">
        <li ><a class="texteColor" href="">Saison</a></li>
        <li><a class="texteColor" href="">Formulaire</a></li>
      </ul>
    </div>
  </nav>
  <ul class="sidenav" id="mobile-demo">
    <li><a href="">Saison</a></li>
    <li><a href="">Formulaire</a></li>
  </ul>
</template>
<script>
export default {
  name: "NavBar",
  props: {
    isHomePage: { type: Boolean, default: false }
  },
  computed: {
    className() {
      return this.isHomePage ? "navAccueil" : "colorNavbar";
    }
  },
  methods: {
  }
}

</script>
<style scoped>
.colorNavbar {
  background-color: #E0F2C4;
}

.navAccueil {
  position: absolute;
  background-color: rgba(224, 242, 196, 0.2);
}

.brand-logo {
  color: #131E28;
}

.left {
  display: flex;
  justify-content: space-around;
  float: none !important;
}
</style>