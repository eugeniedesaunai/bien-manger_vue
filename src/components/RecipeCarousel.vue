<template>
    <div class="carousel">
        <a class="carousel-item flexWrap" href="#1!"><p>1</p><p>1</p></a>
        <a class="carousel-item flexWrap" href="#2!"><p>2</p><p>2</p></a>
        <a class="carousel-item flexWrap" href="#3!"><p>3</p><p>3</p></a>
        <a class="carousel-item flexWrap" href="#4!"><p>4</p><p>4</p></a>

    </div>
</template>

    <script>
        export default {
            name: 'RecipeCarousel',
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
    text-align:center;
     
 }
 .carousel-item{
     left:auto;
 }
 .flexWrap{
     flex-wrap:wrap;
 }

.flex p{
    width:100%
}

 </style>