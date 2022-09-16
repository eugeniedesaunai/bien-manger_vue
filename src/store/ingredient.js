import api from '@/services/airtable';
export default {
    namespaced: true,
    state: {
        currentIngredients: [],
        ingredients: [],

    },
    getters: {
        listIngredient(state) {
            return state.ingredients;
        },

        //get ingredient per Id
        getIngredientsPerId: (state) => (params) => {
            return state.ingredients.find(ingredient => ingredient.id == params);
        }

    },
    mutations: {
        // permet de trier l'objet retourner par la BDD 
        fillIngredients(state) {
            let temp = [];
            let item = this.state.ingredients;
            Object.keys(item).forEach(key => {
                Object.keys(item[key]).forEach(child => {
                    temp.push({ id: item[key][child].id, name: item[key][child].fields.Name });
                })
            })
            state.currentIngrediens = temp;
            state.ingredients = temp;
        },


        add(state, record) {
            state.ingredient.push(record)
        }
    },
    actions: {
        async checkIngredient(context) {
            let result = await api.find({ resource: 'Ingredient', query: 'maxRecords=10' })
            this.state.ingredients = result;
            if (this.state.ingredients !== this.state.currentIngredients) {
                context.commit('fillIngredients');
            }
        },

        // permet d'ajouter un ingrédient s'il n'existe pas en BDD
        async addNewIngredient(context, ingredient_name) {
            let objet = {
                records: [
                    { fields: { Name: ingredient_name } }]
            }
            await api.create({ resource: 'Ingredient', data: objet })
            context.dispatch('checkIngredient')
        },

        // permet d'ajouter une quantité 
        async addNewQuantity(context, { ingredient, quantity, unit }) {
            let recette_id = "recM9wxxQYN17fDlY"
            let objet = {
                records: [
                    { fields: { Recette: [recette_id], Ingredient: [ingredient], Quantity: Number(quantity), Unit: unit } }]
            }
            await api.create({ resource: 'Recette_has_Ingredient', data: objet })
        }
    }
}