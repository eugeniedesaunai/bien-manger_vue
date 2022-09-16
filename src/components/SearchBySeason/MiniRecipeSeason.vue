<template lang="">
    <div class="imgMonth" :style='cssProps'>
         <a class="blueColor" :href="'/recipe/' + recipe.id">{{recipe.name}}</a>
     </div>
</template>
<script>
export default {
    name: "MiniRecipeSeason",
    props: ['recipe'],
    computed: {
        cssProps() {
            return {
                '--img-recipe': "url(" + this.recipe.img[0]?.url + ")",
            }
        }
    }
}
</script>
<style scoped>
.imgMonth {
    width: 60vw;
    height: 60vh;
    background-image: var(--img-recipe);
    background-size: cover;
    background-position: center;
    position: relative;
    margin-top: 3rem;
    margin-bottom: 6rem;
}

a {
    width: 60vw;
    height: 20vh;
    background-color: #E0F2C4;
    position: absolute;
    top: 80%;
    left: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

}

@media(min-width: 768px) {

    .imgMonth {
        width: 20vw;
        height: 30vw;
    }

    a {
        width: 20vw;
        height: 8vh;
    }
}

@media(min-width: 1280px) {

    .imgMonth {
        width: 20vw;
        height: 40vh;
    }

    a {
        width: 20vw;
        height: 12vh;
    }
}
</style>