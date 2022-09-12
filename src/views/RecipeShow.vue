<template lang="">
    <NavBar></NavBar>
    <article>
        <div class="imgRecipe"></div>
        <p>{{this.$store.dispatch('getItems')}}</p>
    </article>
    
</template>
<script>
import NavBar from '@/components/NavBar.vue';
import api from '@/services/airtable';
export default {
    name: "RecipeShow",
    components: {
        NavBar
    },
    async created() {
        let r = await api.find({ resource: 'Recette', query: 'maxRecords=5' })
        console.log(r);
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