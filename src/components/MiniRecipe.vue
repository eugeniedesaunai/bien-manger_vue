<template lang="">
            <div class="imgMonth">
                <p> Be a nyan cat. <input type="button" value="voir la recette"></p>
            </div>
</template>
<script>
export default {
    name: "MiniRecipe",
}
</script>
<style scoped>
.imgMonth {
    width: 70vw;
    height: 60vh;
    background-image: url(@/assets/Home/epice.jpg);
    background-size: cover;
    background-position: center;
    position: relative;

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

@media(min-width: 768px) {

    .imgMonth {
        width: 20vw;
        height: 20vh;
    }

    p {
        width: 20vw;
        height: 8vh;
    }
}

@media(min-width: 1280px) {

    .imgMonth {
        width: 20vw;
        height: 40vh;
    }

    p {
        width: 20vw;
        height: 12vh;
    }
}
</style>