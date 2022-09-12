import api from '@/services/airtable';
export default {
    namespaced: true,
    state: {
        season: {}
    },
    getters: {
        getSeason(state, name) {
            return state.season[name];
        }
    },
    mutations: {
        fillSeason() {
            let temp = [];
            let item = this.state.season;
            Object.keys(item).forEach(key => {
                Object.keys(item[key]).forEach(child => {
                    temp.push({ id: item[key][child].id, name: item[key][child].fields.Name });
                })
            })
            console.log(temp);
        }
    },
    actions: {
        async checkSeason(context) {
            let result = await api.find({ resource: 'Saison', query: 'maxRecords=10' })
            this.state.season = result;
            context.commit('fillSeason');
            if (this.state.season > 0) {
                this.commit('fillSeason');
            }
        }
    }

}