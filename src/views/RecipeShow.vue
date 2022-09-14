<template lang="">
    <NavBar class="navBar"></NavBar>
    <section class="flex ">
    <article>
        <div class="imgRecipe"></div> 
    </article>
    <article class="flex column spaceAround paddingRecipe">
         <h1>Nom recette </h1>
         <div class="flex spaceAround">
             <ul>
            <li>Saison</li>
            <li>Type de plat </li>
         </ul>
           <ul>
            <li>ingredient</li>
            <li>ingredient</li>
            <li>ingredient</li>
            <li>ingredient</li>
            <li>ingredient</li>
            <li>ingredient</li>
           </ul>
         </div>
        
           <ul>
            <li>step1 :  Be a nyan cat, feel great about it, be annoying 24/7 poop rainbows in litter box all day love blinks 
        and purr purr purr purr yawn proudly present butt to human. Bird bird bird bird bird bird human why 
        take bird out i could have eaten that snuggles up to shoulders?</li>
            <li>step2 :  Be a nyan cat, feel great about it, be annoying 24/7 poop rainbows in litter box all day love blinks 
        and purr purr purr purr yawn proudly present butt to human. Bird bird bird bird bird bird human why 
        take bird out i could have eaten that snuggles up to shoulders?</li>
           </ul>
    </article>
    </section>

          
</template>
<script>
import NavBar from '@/components/NavBar.vue';
export default {
    name: "RecipeShow",
    data() {
        return {
            result: '',
        }
    },
    components: {
        NavBar,
    },
}
</script>

<style scoped>
.paddingRecipe {
    padding: 2rem;
}

.imgRecipe {
    width: 40vw;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: url(../assets/Home/farine.jpg);
}

section {
    height: 100%;
}
</style>