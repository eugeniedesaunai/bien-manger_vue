<template lang="">
    <div class="imgBanner "> </div>
    <p class="textBanner absolute blueColor textCenter textFont">
        A chaque saison, ses recettes. C’est un fait, l'été, n'offre pas les mêmes possibilités qu’en plein 
        cœur de l’hiver. 
        Découvrez dès à présent nos meilleures recettes de saison.
    </p>
<input @click='Redirect' type="button" class="buttonSaison absolute greenColor textUppercase" value="Cherchez une recette par saison">
</template>
<script>

export default {
    name: 'HomeBanner',
    methods: {
        Redirect() {
            window.location.href = '/season/search';
        }
    },
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

    .imgBanner {
        height: 85vh;
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