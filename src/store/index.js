import { createStore } from 'vuex'
import api from '@/services/airtable';
import recipe from './recipe';
import season from './season';
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
    showItem(state) {
      return state.seasons;
    }

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
    season
  }
})
