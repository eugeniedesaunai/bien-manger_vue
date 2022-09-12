<<<<<<< HEAD
import { createStore } from 'vuex'
import api from '@/services/airtable';
import recipe from './recipe';
import season from './season';
=======
import { createStore } from 'vuex';
import api from '@/services/airtable';

>>>>>>> 323845a3a20852e8643179c2c1f5fc0da0d9a8d0
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
<<<<<<< HEAD
    async created(result) {
      result = await api.find({ resource: 'Saison', query: 'maxRecords=10' })
      this.state.seasons = result;
    }
=======

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

    async created() {
      let result = await api.find({ resource: 'Saison', query: 'maxRecords=5' });
      this.state.seasons = result;
      console.log(result);
    },
>>>>>>> 323845a3a20852e8643179c2c1f5fc0da0d9a8d0
  },

  modules: {
    recipe,
    season
  }
})
