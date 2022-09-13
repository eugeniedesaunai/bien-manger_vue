import api from '@/services/airtable';
export default {
    namespaced: true,
    state: {
        recipe: {},
    },
    getters: {
        getRecipe(state) {
            return state.recipe;
        },

        /*getRecipePerSeason(state, seasonId) {
            //let temp = state.recipe.filter(recipe => recipe.Saison.id == seasonId)
            //console.log(temp);
            for (let r of state.recipe) {

            }
        },

        getRecipePerIngredient() {

        }*/
    },
    mutations: {
        async fillRecipe() {
            let { records } = this.state.recipe
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
            this.state.recipe = recipes;
            console.log(this.state.recipe);
        }
    },
    actions: {
        async checkRecipe(context) {
            let result = await api.find({ resource: 'Recette', query: 'maxRecords=10' });
            this.state.recipe = result;
            context.commit('fillRecipe');
        }
    }

}