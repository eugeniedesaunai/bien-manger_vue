import api from '@/services/airtable';
export default {
    namespaced: true,
    state: {
        recipe: {},
        recipeIngredient: {},
    },
    getters: {
        getSeason(state, name) {
            return state.recipe[name];
        }
    },
    mutations: {
        fillRecipe() {
            let temp = [];
            let tempIngrdients = [];
            let ingredients = this.state.recipeIngredient;
            let item = this.state.recipe;
            Object.keys(item).forEach(keyRecipe => {
                Object.keys(item[keyRecipe]).forEach(childRecipe => {

                    Object.keys(ingredients).forEach(keyIngredient => {
                        Object.keys(ingredients[keyIngredient]).forEach(childIngredient => {
                            Object.keys(ingredients[keyIngredient][childIngredient].fields.Recette).forEach(recipeId => {
                                if (ingredients[keyIngredient][childIngredient].fields.Recette[recipeId] == item[keyRecipe][childRecipe].id) {
                                    tempIngrdients.push({
                                        ingredientIds: ingredients[keyIngredient][childIngredient].fields.Ingredient,
                                        quantity: ingredients[keyIngredient][childIngredient].fields.Quantity,
                                        unit: ingredients[keyIngredient][childIngredient].fields.Unit
                                    })
                                }
                            });
                        })
                    })
                    temp.push({
                        Recipe: {
                            id: item[keyRecipe][childRecipe].id,
                            name: item[keyRecipe][childRecipe].fields.Name,
                            description: item[keyRecipe][childRecipe].fields.Description,
                            ingredient: tempIngrdients,
                            step: item[keyRecipe][childRecipe].fields.Etape,
                            season: item[keyRecipe][childRecipe].fields.Saison
                        }
                    });
                })
            })
            this.state.recipe = temp;
        }
    },
    actions: {
        async checkRecipe(context) {
            let result = await api.find({ resource: 'Recette', query: 'maxRecords=10' });
            this.state.recipe = result;
            result = await api.find({ resource: 'Recette_has_Ingredient', query: 'maxRecords=30' });
            this.state.recipeIngredient = result;
            context.commit('fillRecipe');
        }
    }

}