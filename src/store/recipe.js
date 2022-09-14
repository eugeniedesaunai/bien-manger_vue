import api from '@/services/airtable';
export default {
    namespaced: true,
    state: {
        recipes: [],
        recipesApi: [],
    },
    getters: {
        getRecipe(state) {
            return state.recipes;
        },

        getRecipePerSeason: (state) => (seasonId) => {
            console.log(state.recipes);
            let recipe = state.recipes.filter(recipe => recipe.Saison.includes(seasonId));
            recipe = recipe.map(recipe => { return { id: recipe.id, name: recipe.Name, img: recipe.Image } })
            console.log(recipe);
            return recipe;
        },
        /*
                getRecipePerIngredient(state, ingredientId) {
        
                }*/
    },
    mutations: {
        async fillRecipe() {
            let { records } = this.state.recipesApi
            let recipes = records.map(record => { return { id: record.id, ...record.fields } })
            let ingredients = await api.find({ resource: 'Recette_has_Ingredient', query: '' });
            ({ records } = ingredients)
            ingredients = records.map(record => { return { id: record.id, ...record.fields } })
            for (let r of recipes) {
                r.ingredients = ingredients.filter(i => i.Recette.includes(r.id))
            }
            let images = await api.find({ resource: 'Image', query: '' });
            ({ records } = images)
            images = records.map(record => { return { id: record.id, ...record.fields } })
            for (let r of recipes) {
                r.images = images.filter(i => i.Recette.includes(r.id))
            }
            this.state.recipes = recipes;
            console.log(this.state.recipes);
        }
    },
    actions: {
        async checkRecipe(context) {
            let result = await api.find({ resource: 'Recette', query: 'maxRecords=10' });
            this.state.recipesApi = result;
            context.commit('fillRecipe');
        }
    }

}