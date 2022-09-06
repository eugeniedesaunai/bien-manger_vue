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
    created() {
        //this.$store.dispatch('getRecipes', ['DWWM', 'toto']);
        this.$store.dispatch('getSeasons', 'DWWM');
        //this.$store.commit('test', 'DWWM');
        // var myHeaders = new Headers();
        // //myHeaders.append("Authorization", "Bearer " + process.env.VUE_APP_AIRTABLE_API_KEY);
        // let options = {
        //     headers: myHeaders
        // }
        // fetch("https://api.airtable.com/v0/appcCZi8CySwsHTVJ/Recette?maxRecords=3&view=Grid%20view", options)
        //     .then((data) => data.json())
        //     .then((recipes) => {
        //         console.log(recipes);
        //     });
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