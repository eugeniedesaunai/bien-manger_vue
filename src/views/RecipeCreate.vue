<template>
    <NavBar :isHomePage="false"></NavBar>
    <div class="container textCenter">
        <form class="flex column widthForm spaceAround form" action="" onsubmit="return false;">
            <InputTextForm @selectInput="get_input" content="Nom de la recette : " fname="recipe" />
            <TextAreaForm @selectTextarea="getTextarea" content="Description de la recette :" fname="description" />
            <SelectForm @selectOption="get_season" content="Saison : " fname="season" func="checkSeason"></SelectForm>
            <ImageForm @selectInput="get_input" content="Image : " fname="image" />
            <SelectForm @selectOption="get_meal" content="Plat : " fname="meal" func="checkMeal"></SelectForm>
            <ButtonForm value="Suivant" @someclick="Next" @click="next" />
        </form>
    </div>
</template>
<script>
import InputTextForm from '@/components/forms/InputForm.vue';
import ButtonForm from '@/components/forms/ButtonForm.vue';
import SelectForm from '@/components/forms/SelectForm.vue';
import TextAreaForm from '@/components/forms/TextAreaForm.vue';
import NavBar from '@/components/NavBar.vue';
import ImageForm from '@/components/forms/ImageForm.vue';
export default {

    name: 'RecipeCreate',
    data() {
        return {
            newRecipe: { name: '', description: '', image: [], season: '', meal: '' },
            fields: ['recipe', 'description', 'season', 'image', 'meal'],
            test: {},
            Valid: [],
            recipe: '',
            description: '',
            image: '',
            season: '',
            meal: '',
        }
    },
    components: {
        InputTextForm,
        ButtonForm,
        NavBar,
        SelectForm,
        TextAreaForm,
        ImageForm
    },
    methods: {
        redirect() {
            this.$router.push({ name: 'ingredientCreate' })
        },
        //Action
        Next() {
            this.Valid = [];
            this.check_values();
            if (this.Valid.length == this.fields.length) {
                this.newRecipe.name = this.recipe;
                this.newRecipe.description = this.description;
                this.newRecipe.season = this.season;
                this.newRecipe.meal = this.meal;
                this.$store.dispatch("recipe/addRecipes", this.newRecipe);
                localStorage.setItem('recipe', JSON.stringify(this.newRecipe));
                this.redirect();
            }
        },
        //Recupération de la saison
        get_season(selected) {
            this.season = selected;
        },
        //Recupération du plat
        get_meal(selected) {
            this.meal = selected;
        },
        //Recupération des valeurs
        get_input(value) {
            const inputs = document.getElementsByTagName('input');
            for (let index = 0; index < inputs.length; index++) {
                if (inputs[index].value == value) {
                    if (inputs[index].id == 'recipe') {
                        this.recipe = value;
                    }
                }
                if (inputs[index].files == value) {
                    if (inputs[index].id == 'image') {
                        for (let file of value) {
                            this.image = file.name;
                        }
                    }
                }
            }
        },
        //Récupération du textarea
        getTextarea(value) {

            this.description = value;
        },
        //Vérification des valeurs
        check_values() {
            this.fields.forEach(field_name => {
                const field = document.getElementById(field_name);
                if (!this[field_name]) {
                    field.classList.add('invalid');
                } else {
                    field.classList.add('valid');
                    this.Valid.push(field_name);
                }
            })
        }
    },
}
</script >
<style scoped>
:root {
    --color-gray: #9e9e9e;
}

.container {
    width: 100vw;
}

.form {
    height: 80vh;
}

.invalid {
    border-bottom: 1px solid #F44336;
    box-shadow: 0 1px 0 0 #F44336;
}

.valid {
    border-bottom: 1px solid #4CAF50;
    box-shadow: 0 1px 0 0 #4CAF50;
}
</style>