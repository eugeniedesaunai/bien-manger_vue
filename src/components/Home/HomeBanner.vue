<template lang="">
    <div class="imgBanner"></div>
    <p class="textBanner">Be a nyan cat, feel great about it, be annoying 24/7 poop rainbows in litter box all day love blinks and purr purr purr purr yawn proudly present butt to human. Bird bird bird bird bird bird human why take bird out i could have eaten that snuggles up to shoulders?</p>
<input type="button" class="buttonSaison" value="Cherchez une recette par saison">
</template>
<script>

export default {
    name: 'HomeBanner',
}
</script>

<style scoped>
.imgBanner {
    background-image: url("@/assets/Home/table.jpg");
    width: 100vw;
    height: 90vh;
    background-size: cover;
    background-position: center;
    position: relative;
}

.textBanner {
    background-color: rgba(29, 40, 75, 0.5);
    color: #E0F2C4;
    position: absolute;
    text-align: center;
    padding: 2rem;
    top: 25%;
    margin: 0;
    border-radius: 1rem;
    margin-left: 2rem;
    margin-right: 2rem;
}

.buttonSaison {
    position: absolute;
    top: 65%;
    left: 20%;
    margin: 0;
    background-color: rgba(29, 40, 75, 0.5);
    color: #E0F2C4;
    border-radius: 1rem;
    width: 60vw;
    height: 8vh;
    text-transform: uppercase;
    white-space: normal;
}
</style>