import api from '@/services/airtable';
export default {
    namespaced: true,
    state: {
        //Liste complète des plats
        meals: [],
        //Liste des noms des plats
        mealsList: []
    },
    getters: {
        /**
         * Recupération de la liste des plats
         */
        getName: (state) => {
            return state.meals
        },
        /**
         * Récupération de l'id d'un plat par son nom
         */
        getMeal: (state) => (params) => {
            let res = '';
            for (let index = 0; index < state.meals.length; index++) {
                if (state.meals[index].name == params) {
                    res = state.meals[index].id;
                }
            }
            return res;
        }
    },
    mutations: {
        /**
         * Récupération des plats
         */
        fillMeals(state) {
            let temp = [];
            let tempName = [];
            let items = this.state.meals;
            Object.keys(items).forEach(key => {
                Object.keys(items[key]).forEach(child => {
                    temp.push({ id: items[key][child].id, name: items[key][child].fields.Name });
                    tempName.push(items[key][child].fields.Name);
                })
            })
            state.meals = [...temp];
            state.mealsList = [...tempName];
        },
    },
    actions: {
        /**
         * Connection à la table
         */
        async checkMeal(context) {
            let result = await api.find({ resource: 'Plat', query: 'maxRecords=6' })
            this.state.meals = result;
            context.commit('fillMeals');
            if (this.state.season > 0) {
                this.commit('fillMeals');
            }
        }
    }

}