<template lang="">
<nav :class="className" >
    <div class="nav-wrapper">
      <a href="/" class="brand-logo center texteColor heightLogo"><img class="heightLogo marginLogo" src="@/assets/logo.png" alt=""></a>
     <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="left  hide-on-med-and-down flexArround">
        <li ><a class="texteColor" href="/season/search">Saison</a></li>
        <li><a class="texteColor" href="/recipe/create">Formulaire</a></li>
      </ul>
    </div>
  </nav>
  <ul class="sidenav" id="mobile-demo">
    <li><a href="/season/search">Saison</a></li>
    <li><a href="/recipe/create">Formulaire</a></li>
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
.heightLogo {
  height: 100%;
}

.marginLogo {
  margin-top: 0.3rem;
}

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

.sidenav {
  width: 50vw;
  height: 30vh;
  background-color: rgba(224, 242, 196, 0.9);
  border-radius: 0rem 0rem 3rem 0rem;
}

@media(min-width: 768px) {
  .sidenav {
    height: 15vh;
  }
}


nav {
  z-index: 1;
}
</style>