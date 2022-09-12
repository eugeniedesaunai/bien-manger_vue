import api from '@/services/airtable';
export default {
    namespaced: true,
    state: {
        recipe: {},
    },
    getters: {
        getSeason(state, name) {
            return state.recipe[name];
        }
    },
    mutations: {
        fillRecipe() {
            let tempRecipe = [];
            let tempStep = [];
            let tempIngredient = [];
            let tempSeason = [];
            let item = this.state.recipe;
            console.log(item);
            Object.keys(item).forEach(key => {
                Object.keys(item[key]).forEach(child => {
                    tempStep.push(item[key][child].fields.Etape);
                    tempSeason.push(item[key][child].fields.Saison);
                    tempIngredient.push(item[key][child].fields.Recette_has_Ingredient);
                    tempRecipe.push({ id: item[key][child].id, name: item[key][child].fields.Name, description: item[key][child].fields.Description });
                })
            })
            console.log(tempRecipe);
        }
    },
    actions: {
        async checkRecipe(context) {
            let result = await api.find({ resource: 'Recette', query: 'maxRecords=10' })
            this.state.recipe = result;
            context.commit('fillRecipe');
        }
    }

}