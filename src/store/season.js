import api from '@/services/airtable';
export default {
    namespaced: true,
    state: {
        //Liste complète des saisons
        seasons: [],
        //Liste des noms des saisons
        seasonsList: []
    },
    getters: {
        /**
         * Recupération de la liste des seasons
         */
        getName: (state) => {
            return state.seasons
        },
        /**
         * Récupération de l'id d'une saison par son nom
         */
        getSeasons: (state) => (params) => {
            let res = '';
            for (let index = 0; index < state.seasons.length; index++) {
                if (state.seasons[index].name == params) {
                    res = state.seasons[index].id;
                }
            }
            return res;
        }
    },
    mutations: {
        /**
         * Récupération des saisons
         */
        fillSeasons(state) {
            let temp = [];
            let tempName = [];
            let items = this.state.seasons;
            Object.keys(items).forEach(key => {
                Object.keys(items[key]).forEach(child => {
                    temp.push({ id: items[key][child].id, name: items[key][child].fields.Name });
                    tempName.push(items[key][child].fields.Name);
                })
            })
            state.seasons = [...temp];
            state.seasonsList = [...tempName];
        },
    },
    actions: {
        /**
         * Connection à la table
         */
        async checkSeason(context) {
            let result = await api.find({ resource: 'Saison', query: 'maxRecords=10' })
            this.state.seasons = result;
            context.commit('fillSeasons');
            if (this.state.season > 0) {
                this.commit('fillSeasons');
            }
        }
    }
}