<template lang="">
    <article class="formSearch">
        <h2 class="titleFont textCenter widthTitle">Chercher une recette :</h2>

        <input  type="search" name="nom_recette" id=""> 
        <label class="blueColor" for="Nom de la Recette"> Nom de la Recette: </label>
       
        <input  type="search" name="nom_ingredient" id=""> 
        <label class="blueColor" for="Nom de la Recette">Ingredient: </label>

        <SelectForm @selectOption="get_season" content="Saison : " fname="season" func="checkSeason"></SelectForm>
        <div  class="input-field col s12" >
        <select>
                <option value="" disabled selected>Choisissez une saison</option>
                <option value="1">Printemps</option>
                <option value="2">Été</option>
                <option value="3">Automne</option>
                <option value="4">Hiver</option>
        </select>      
  </div>
  <input type="submit" class="buttonForm greenColor textUppercase marginButton " value="rechercher" id="">
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
    height: 3rem;
    border-radius: 2rem;
    align-items: center;
}

select:focus {
    border-color: #A9BF99;
}


.formSearch {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #A9BF99;
    padding-top: 1rem;
    padding-bottom: 3rem;
    margin-top: 3rem;
    margin-bottom: 6rem;
}

.buttonForm {
    width: 45vw;
    height: 8vh;
}


input[type=search]:not(.browser-default) {
    width: 80%;
    height: 20%;

}


@media(min-width: 768px) {
    .formSearch {
        width: 100vw;
        height: 50vh;
    }
}

@media(min-width: 1280px) {
    .formSearch {
        width: 100vw;
        height: 60vh;
    }
}
</style>