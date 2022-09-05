<template>
<div class="carousel">
    <a class="carousel-item" href="#one!">patate</a>
    <a class="carousel-item" href="#two!">tomate</a>
    <a class="carousel-item" href="#three!">beurre</a>
    <a class="carousel-item" href="#four!">chocolat</a>

  </div>
</template>

    <script>
        export default {
            name: 'IngredientCarousel',
            data() {
                return {
                }
            },
            props: {
            }
        }
    </script>
 <style scoped>
 .carousel{
     margin:auto;
     width:100%;
     height:5vh !important;
     text-align:center;
     margin-top:5vh;
 }
 .carousel-item{
     left:auto;
 }
 </style>