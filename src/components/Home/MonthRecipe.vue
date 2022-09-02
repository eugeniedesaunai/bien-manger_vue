<template lang="">
    <article class="cercle absolute">
        
</article>
</template>
<script>
export default {
    name: 'MonthRecipe',
}
</script>
<style scoped>
.cercle {
    z-index: 1;
    height: 250px;
    width: 250px;
    border: 5px solid #A9BF99;
    border-radius: 50%;
    background-color: #A9BF99;
    top: 5%;
    left: 10%;
}

@media(min-width: 768px) {
    .cercle {
        height: 600px;
        width: 600px;
        top: 6%;
    }
}

@media(min-width: 1280px) {
    .cercle {
        height: 450px;
        width: 450px;
        top: 10%;
    }
}
</style>