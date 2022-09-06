import { createStore } from 'vuex'

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
    storeRecipes(context, recipes) {
      context.recipes = Object.assign({}, recipes);
      console.log(context.recipes);
    },
    storeSeasons(context, seasons) {
      context.seasons = Object.assign({}, seasons);
      console.log(context.seasons);
    },
    storeIngredients(context, ingredients) {
      context.ingredients = Object.assign({}, ingredients);
      console.log(context.ingredients);
    },
    storeSteps(context, steps) {
      context.steps = Object.assign({}, steps);
      console.log(context.steps);
    },
    storeRecipesIngredients(context, recipes_ingredients) {
      context.recipes_ingredients = Object.assign({}, recipes_ingredients);
      console.log(context.recipes_ingredients);
    }
  },
  actions: {
    /**
     * url: [Recette, Saison, Etape, Ingredient, Recette_has_Ingredients]
     */
    getItems(context, elements) {
      let url = ''; // nom de la table
      let maxrecords = 0; // nombre valeur table
      let name = '';
      for (let index = 0; index < elements.length; index++) {
        console.log(elements[index]);
        url = elements[0];
        maxrecords = elements[1];
        name = elements[2];
      }
      context.commit('init');
      fetch("https://api.airtable.com/v0/appcCZi8CySwsHTVJ/" + url + "?maxRecords=" + maxrecords + "&view=Grid%20view",
        this.state.options)
        .then((data) => data.json())
        .then((result) => {
          this.commit('store' + name, result);
        });
    }
  },
  modules: {

  }
})
