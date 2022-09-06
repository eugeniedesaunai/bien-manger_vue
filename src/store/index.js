import { createStore } from 'vuex'

export default createStore({
  state: {
    myheader: new Headers(),
    options: {},
    recipes: {},
    seasons: {},
    steps: {},
    ingredients: {}
  },
  getters: {

  },
  mutations: {
    init() {
      this.state.myheader.append("Authorization", "Bearer " + process.env.VUE_APP_AIRTABLE_API_KEY);
      this.state.options = { headers: this.state.myheader };
    },
    storeRecipes(context, recipes) {
      context.recipes = recipes;
      console.log(context.recipes);
    },
    storeSeasons(context, seasons) {
      context.seasons = seasons;
      console.log(context.seasons);
    }
  },
  actions: {
    getRecipes(context, element) {
      console.log(element);
      context.commit('init');
      fetch("https://api.airtable.com/v0/appcCZi8CySwsHTVJ/Recette?maxRecords=3&view=Grid%20view", this.state.options)
        .then((data) => data.json())
        .then((recipes) => {
          this.commit('storeRecipes', recipes);
        });
    },
    getSeasons(context, element) {
      console.log(element);
      context.commit('init');
      fetch("https://api.airtable.com/v0/appcCZi8CySwsHTVJ/Saison", this.state.options)
        .then((data) => data.json())
        .then((seasons) => {
          this.commit('storeSeasons', seasons);
        });
    }
  },
  modules: {

  }
})
