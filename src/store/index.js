import { createStore } from 'vuex'
import api from '@/services/airtable';
import recipe from './recipe';
import season from './season';
<<<<<<< HEAD
import meal from './meal';
=======
import ingredient from './ingredient';
>>>>>>> 2840c09690243764ad70637837d251dcafa30378

export default createStore({
  state: {
    myheader: new Headers(),
    options: {},
    recipes: {},
    seasons: {},
    steps: {},
    ingredients: {},
    recipes_ingredients: {}
  },
  getters: {


  },
  mutations: {
    init() {
      this.state.myheader.append("Authorization", "Bearer " + process.env.VUE_APP_AIRTABLE_API_KEY);
      this.state.options = { headers: this.state.myheader };
    },
  },
  actions: {
    async created(result) {
      result = await api.find({ resource: 'Saison', query: 'maxRecords=10' })
      this.state.seasons = result;
    }
  },

  modules: {
    recipe,
    season,
<<<<<<< HEAD
    meal
=======
    ingredient
>>>>>>> 2840c09690243764ad70637837d251dcafa30378
  }
})
