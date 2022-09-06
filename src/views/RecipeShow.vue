<template lang="">
    <NavBar></NavBar>
    <article>
        <div class="imgRecipe"></div>
        <p></p>
    </article>
    
</template>
<script>
import NavBar from '@/components/NavBar.vue';
export default {
    name: "RecipeShow",
    components: {
        NavBar
    },
}
</script>

<style scoped>
article {
    display: flex;
    flex-direction: column;
    align-items: center;
}

div {
    width: 50vw;
    height: 50vh;
    background-size: cover;
    background-position: center;
}

.imgRecipe {
    background-image: url(../assets/Home/farine.jpg);
}

p {
    width: 60vw;
    height: 20vh;
    background-color: #E0F2C4;
}
</style>