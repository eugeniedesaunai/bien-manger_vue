<template lang="">
    <article class="formSearch">
        <h2>Chercher une recette :</h2>

        <label class="blueColor" for="Nom de la Recette"> Nom de la Recette: </label>
        <input  type="search" name="nom_recette" id="">

        <label class="blueColor" for="Nom de la Recette">Ingredient: </label>
        <input  type="search" name="nom_ingredient" id="">

        <label class="blueColor" for="Saison"> Saisons :</label>
        <div class="input-field col s12">
             <select>
                <option value="" disabled selected>Choisissez une saison</option>
                <option value="1">Printemps</option>
                <option value="2">Été</option>
                <option value="3">Automne</option>
                <option value="4">Hiver</option>
        </select>      
  </div>
  <input type="submit" name="Rechercher" id="">
    </article>
</template>
<script>
export default {
    name: "SearchForm",
}
</script>
<style scoped>
label {
    font-size: 1rem;
}

select {
    display: block;
    height: 2rem;
}

.formSearch {

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    background-color: #A9BF99;
    padding-top: 1rem;
    padding-bottom: 3rem;
    margin-top: 3rem;
    margin-bottom: 6rem;
}

h2 {
    font-size: 2rem;
}

input[type=search]:not(.browser-default) {
    width: 80%;
    height: 8%;
    background-color: #E0F2C4;
}

input[type=search]:not(.browser-default):focus {
    border: 0px solid #131E28;

}

@media(min-width: 768px) {
    .formSearch {
        width: 100vw;
        height: 45vh;
    }
}

@media(min-width: 1280px) {
    .formSearch {
        width: 100vw;
        height: 50vh;
    }
}
</style>