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
    shomItem(state) {
      return state.recipes;
    }

  },
  mutations: {

    init() {
      this.state.myheader.append("Authorization", "Bearer " + process.env.VUE_APP_AIRTABLE_API_KEY);
      this.state.options = { headers: this.state.myheader };
    },
    /**
    * @param itemList : resultat de la récupération des données 
    * @param statename : nom du state correspondant à la table
    * [recipes, seasons, steps, ingredients, recipes_ingredients]
    */
    // storeItems(context, elements) {
    //   let itemList = '';
    //   let statename = '';
    //   for (let index = 0; index < elements.length; index++) {
    //     itemList = elements[0];
    //     statename = elements[1];
    //   }
    //   statename;
    //   context.statename = Object.assign({}, itemList);
    //   this.getters.showItem;
    //   console.log(context.statename);
    // }
  },
  actions: {

    /**
    * @param tablename : nom de la table
    * [Recette, Saison, Etape, Ingredient, Recette_has_Ingredients]
    * @param maxrecords: nombre de données dans la table
    * @param statename : nom du state correspondant à la table
    * appel de la fonction: this.$store.dispatch('getItems', [tablename, maxrecords, statename])
    */
    // getItems(context, elements) {
    //   let tablename = '';
    //   let maxrecords = 0;
    //   let statename = '';
    //   for (let index = 0; index < elements.length; index++) {
    //     //console.log(elements[index]);
    //     tablename = elements[0];
    //     maxrecords = elements[1];
    //     statename = elements[2];
    //   }
    //   context.commit('init');
    //   fetch("https://api.airtable.com/v0/appcCZi8CySwsHTVJ/" + tablename + "?maxRecords=" + maxrecords + "&view=Grid%20view", this.state.options)
    //     .then((data) => data.json())
    //     .then((result) => {
    //       this.commit('storeItems', [result, statename]);
    //     });
    // }
  },
  modules: {

  }
})
