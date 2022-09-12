<template lang="">
    <NavBar></NavBar>
    <article>
        <div class="imgRecipe"></div>
        <p>{{this.$store.getters['season/getSeason', 'Eté']}}</p>
    </article>
    
</template>
<script>
import NavBar from '@/components/NavBar.vue';

export default {
    name: "RecipeShow",
    data() {
        return {
            result: '',
            name: []
        }
    },
    components: {
        NavBar
    },
<<<<<<< HEAD
    methods: {
        // returnName() {
        //     let item = this.$store.getters.showItem;
        //     Object.keys(item).forEach(key => {
        //         Object.keys(item[key]).forEach(child => {
        //             this.name.push(item[key][child].fields.Name);
        //         })
        //     })
        // }
    },
    created() {
        //this.$store.dispatch('created', this.result);
        this.$store.dispatch('season/checkSeason');
        // this.returnName();
    },
=======
    created() {
        this.$store.dispatch('created', this.result);
    }
>>>>>>> 323845a3a20852e8643179c2c1f5fc0da0d9a8d0
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