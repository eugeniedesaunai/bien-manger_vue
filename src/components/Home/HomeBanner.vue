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
    position: absolute;
    text-align: center;
    padding: 2rem;
    top: 25%;
    margin: 0;
    border-radius: 1rem;
    width: 80vw;
    left: 10%;
    background-color: rgba(224, 242, 196, 0.7);
    color: #2c3e50;
}

.buttonSaison {
    position: absolute;
    top: 68%;
    left: 20%;
    margin: 0;
    border-radius: 1rem;
    width: 60vw;
    height: 8vh;
    text-transform: uppercase;
    white-space: normal;
    background-color: rgba(29, 40, 75, 0.7);
    color: #E0F2C4;
}

@media(min-width: 768px) {
    .textBanner {
        width: 50%;
        top: 30%;
        left: 40%;
    }

    .buttonSaison {
        top: 70%;
    }
}

@media(min-width: 768px) {
    .textBanner {
        width: 30%;
        top: 25%;
        left: 65%;
    }

    .buttonSaison {
        width: 25vw;
        top: 58%;
        left: 68%;
    }
}
</style>