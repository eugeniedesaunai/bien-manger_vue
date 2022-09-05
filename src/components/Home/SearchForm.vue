<template lang="">
    <article class="formSearch">
        <label for="Nom de la Recette"> Nom de la Recette</label>
        <input  type="search" name="nom de la recette" id="">
    </article>
</template>
<script>
export default {
    name: "SearchForm",
}
</script>
<style scoped>
.formSearch {
    margin-bottom: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70vw;
    height: 80vw;
    background-color: #D9D3CC;
    border: solid rgba(29, 40, 75, 0.7);
}

input[type=search]:not(.browser-default) {
    border: 1px solid;
    width: 80%;
    height: 8%;
}

input[type=search]:not(.browser-default):focus {
    border: solid #A9BF99;
    box-shadow: none;
}

@media(min-width: 768px) {
    .formSearch {
        width: 70vw;
        height: 30vh;
    }
}

@media(min-width: 1280px) {
    .formSearch {
        width: 70vw;
        height: 35vw;
    }
}
</style>