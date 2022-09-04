<template lang="">
    <article class="recipesMounth">
        <h1>Recettes du mois</h1>
        <div class="recipesMounth_recipe">
            <div class="imgMonth"><p> Be a nyan cat. <input type="button" value="voir la recette"></p>
            </div>
        </div>
        <div class="recipesMounth_recipe">
            <div class="imgMonth"><p> Be a nyan cat. <input type="button" value="voir la recette"></p>
            </div>
        </div>
        <div class="recipesMounth_recipe">
            <div class="imgMonth"><p> Be a nyan cat. <input type="button" value="voir la recette"></p>
            </div>
        </div>
</article>

</template>
<script>
export default {
    name: 'MonthRecipe',
}
</script>
<style scoped>
.recipesMounth {
    display: flex;
    flex-direction: column;
    height: 280vh;
    justify-content: space-around;
}

.recipesMounth_recipe {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80vw;
}


p {
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

h1 {
    width: 60vw;
    font-size: 2rem;
    align-self: center;
    margin: 0;
    margin-top: 3rem;
}

.imgMonth {
    width: 70vw;
    height: 60vh;
    background-image: url(@/assets/Home/epice.jpg);
    background-size: cover;
    background-position: center;
    position: relative;

}

@media(min-width: 768px) {
    .recipesMounth {
        background-color: #E0F2C4;
        width: 100vw;
        height: 50vh;
    }

    .relative {
        align-items: flex-start;
        padding-left: 6rem;
    }



    .imgMonth {
        width: 30vw
    }

    p {
        width: 20vw;
    }

    h1 {
        width: 20vw;
        font-size: 2rem;
    }
}

@media(min-width: 1280px) {
    .recipesMounth {
        background-color: #E0F2C4;
        width: 100vw;
        height: 50vh;
    }

    .imgMonth {
        width: 20vw
    }

    p {
        width: 15vw;
    }

    h1 {
        width: 15vw;
        font-size: 1.5rem;
    }
}
</style>