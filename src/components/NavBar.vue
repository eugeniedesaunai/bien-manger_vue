<template lang="">
<nav class="colorNavbar">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo center texteColor">CuisiSaison</a>
      <ul id="nav-mobile" class="left hide-on-med-and-down flexArround">
        <li ><a class="texteColor" href="">Saison</a></li>
        <li><a class="texteColor" href="">Formulaire</a></li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
    name: "NavBar"
}
</script>
<style scoped>
.colorNavbar {
    background-color: #E0F2C4;
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