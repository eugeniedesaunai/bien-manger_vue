<template lang="">
    <NavBar></NavBar>
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
</style>