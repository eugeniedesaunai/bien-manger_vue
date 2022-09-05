<template>
    <div  v-if="getWindowWidth > 768" class="carousel">
        <a class="carousel-item flexWrap" href="#1!"><MiniRecipe v-for="i in 2" :key="i"></MiniRecipe></a>
        <a class="carousel-item flexWrap" href="#2!"><MiniRecipe v-for="i in 2" :key="i"></MiniRecipe></a>
        <a class="carousel-item flexWrap" href="#3!"><MiniRecipe v-for="i in 2" :key="i"></MiniRecipe></a>
        <a class="carousel-item flexWrap" href="#4!"><MiniRecipe v-for="i in 2" :key="i"></MiniRecipe></a>
    </div>
    <div v-else class="carousel">
        <a class="carousel-item flexWrap" href="#1!"><MiniRecipe :key="1"></MiniRecipe></a>
        <a class="carousel-item flexWrap" href="#2!"><MiniRecipe :key="1"></MiniRecipe></a>
        <a class="carousel-item flexWrap" href="#3!"><MiniRecipe :key="1"></MiniRecipe></a>
        <a class="carousel-item flexWrap" href="#4!"><MiniRecipe :key="1"></MiniRecipe></a>
    </div>
</template>

    <script>
    import MiniRecipe from '@/components/MiniRecipe.vue';
        export default {
            name: 'RecipeCarousel',
            data() {
                return {
                    windowWidth: window.innerHeight,
                }
            },
            props: {
            },
            components: { MiniRecipe },
            computed: {
                getWindowWidth(){
                    return  window.innerWidth; //this.windowWidth;  
                }
            },
        }
    </script>
 <style scoped>
 .carousel{
     margin:auto;
     width:100%;
    text-align:center;
    margin-top:5vh;
     
 }

 .carousel-item{
     left:auto;
     width:auto;
     height:80vh;
    }

    .imgMonth{
    margin-bottom:20vh;
    }

 @media(min-width: 768px) {
     .carousel-item{
     left:auto;
     width:auto;
     height:120vh;
    }

    .imgMonth{
    margin-bottom:20vh;
    }
 }

 @media(min-width: 1280px) {
     
     .carousel-item{
     left:auto;
     width:auto;
     height:100vh;
    }

    .imgMonth{
    margin-bottom:10vh;
    }
 }



 .flexWrap{
     flex-wrap:wrap;
 }

.flex p{
    width:100%
}

 </style>