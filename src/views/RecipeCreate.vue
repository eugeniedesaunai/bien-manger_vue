<template>
    <div class="container">
        <form action="">
            <InputText @selectInput="GetInput" content="Nom de la recette : " fname="recipe" />
            <SelectForm @selectOption="GetSelected" content="Saison: " fname="season" :options=seasons />
            <InputText @selectInput="GetInput" content="Nom de l'image : " fname="image" />
            <SelectForm @selectOption="GetSelected" content="Plats: " fname="plats" :options=plats />
            <Button value="Créer" @someclick="Test"></Button>
        </form>
    </div>
</template>
<script>
import InputText from '@/components/forms/InputForm.vue';
import Button from '@/components/forms/ButtonForm.vue';
import SelectForm from '@/components/forms/SelectForm.vue';
export default {

    name: 'RecipeCreate',
    data() {
        return {
            newRecipe: { name: '', season: '', image: '', plat: '' },
            seasons: ['test', 'toto'],
            plats: ['entrée', 'plats'],
            recipe: '',
            image: '',
            selectedSeason: '',
            selectedPlat: '',
        }
    },
    components: {
        InputText,
        Button,
        SelectForm,
    },
    methods: {
        Test() {
            this.newRecipe.name = this.recipe;
            this.newRecipe.season = this.selectedSeason;
            this.newRecipe.plat = this.selectedPlat;
            this.newRecipe.image = this.image;
            alert(Object.values(this.newRecipe));
        },
        GetSelected(selected) {
            for (let index = 0; index < this.seasons.length; index++) {
                if (this.seasons[index] == selected) {
                    this.selectedSeason = selected;
                    console.log(this.selectedSeason);
                }
            }
            for (let index = 0; index < this.plats.length; index++) {
                if (this.plats[index] == selected) {
                    this.selectedPlat = selected;
                    console.log(this.selectedPlat);
                }
            }
        },
        GetInput(value) {
            const inputs = document.getElementsByTagName('input');
            for (let index = 0; index < inputs.length; index++) {
                if (inputs[index].value == value) {
                    if (inputs[index].id == 'recipe') {
                        this.recipe = value;
                    }
                    if (inputs[index].id == 'image') {
                        this.image = value;
                    }
                }
            }
        }
    }
}
</script>
<style>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10em;
}
</style>