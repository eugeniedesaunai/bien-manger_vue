<template lang="">
    <NavBar></NavBar>
    <article>
        <div class="imgRecipe"></div>
        <select @v-for="(item, index) in name" :key="index" name="" id="">{{index}}</select>
        <p> {{this.$store.getters['ingredient/getIngredient']}}</p>
    </article>
    
</template>
<script>
import NavBar from '@/components/NavBar.vue';

export default {
    name: "RecipeShow",
    data() {
        return {
            result: '',
            name: this.$store.getters['ingredient/getIngredient'],
        }
    },
    components: {
        NavBar
    },
    methods: {

    },
    created() {
        //this.$store.dispatch('created', this.result);
        this.$store.dispatch('ingredient/checkIngredient');
        // this.returnName();
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