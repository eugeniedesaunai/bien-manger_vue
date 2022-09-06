<template lang="">
    <div class="imgBanner "> </div>
    <p class="textBanner absolute blueColor textCenter">
        Be a nyan cat, feel great about it, be annoying 24/7 poop rainbows in litter box all day love blinks 
        and purr purr purr purr yawn proudly present butt to human. Bird bird bird bird bird bird human why 
        take bird out i could have eaten that snuggles up to shoulders?
    </p>
<input   type="button" class="buttonSaison absolute greenColor textUppercase" value="Cherchez une recette par saison">
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
    height: 100vh;
    position: relative;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.textBanner {
    padding: 2rem;
    top: 25%;
    margin: 0;
    border-radius: 1rem;
    width: 80vw;
    left: 10%;
    background-color: rgba(224, 242, 196, 0.7);
}

.buttonSaison {
    top: 78%;
    left: 20%;
    margin: 0;
    border-radius: 1rem;
    width: 60vw;
    height: 8vh;
    white-space: normal;
    background-color: rgba(29, 40, 75, 0.7);
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

@media(min-width: 1280px) {
    .textBanner {
        width: 30%;
        top: 25%;
        left: 65%;
    }

    .imgBanner {
        height: 90vh;
    }

    .buttonSaison {
        width: 25vw;
        top: 65%;
        left: 68%;
    }
}
</style>