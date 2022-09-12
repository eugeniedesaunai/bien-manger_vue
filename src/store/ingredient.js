import api from '@/services/airtable';
export default {
    namespaced: true,
    state: {
        ingredient: [],
        temps: [],
        ingredientList: [],
    },
    getters: {
        getIngredient(state) {
            let ingredientList = []
            for (let index = 0; index < state.ingredient.length; index++) {
                ingredientList.push(state.ingredient[index].name)
            }
            return ingredientList
        }
    },
    mutations: {
        fillIngredient(state) {
            let temp = [];
            let item = this.state.ingredient;
            Object.keys(item).forEach(key => {
                Object.keys(item[key]).forEach(child => {
                    temp.push({ id: item[key][child].id, name: item[key][child].fields.Name });
                })
            })
            state.temps = temp;
            state.ingredient = temp;
            console.log(state.ingredient);
        }
    },
    actions: {
        async checkIngredient(context) {
            let result = await api.find({ resource: 'Ingredient', query: 'maxRecords=10' })
            this.state.ingredient = result;
            console.log(result);
            if (this.state.ingredient !== this.state.temps) {
                console.log('coucou');
                context.commit('fillIngredient');
            }
        }
    }
}