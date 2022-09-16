<template>
    <!--     <div class='row'>
        <img @click="SeasonSelect('Printemps',$event.target.id)" id='season3'
            src="@/assets/SearchBySeason/printemps.jpg" class='col s3 offset-s2 selectSeason responsive-img'>
        <img @click="SeasonSelect('Eté',$event.target.id)" id='season0' src="@/assets/SearchBySeason/ete.jpg"
            class='col s3 offset-s2 selectSeason responsive-img'>
    </div>
    <div class='row'>
        <img @click="SeasonSelect('Automne',$event.target.id)" id='season1' src="@/assets/SearchBySeason/automne.jpg"
            class='col s3 offset-s2 selectSeason responsive-img'>
        <img @click="SeasonSelect('Hiver',$event.target.id)" id='season2' src="@/assets/SearchBySeason/hiver.jpg"
            class='col s3 offset-s2 selectSeason responsive-img'>
    </div> -->
    <article class="flex">
        <div class="printemps width" @click="SeasonSelect('Printemps',$event.target.id)" id='season3'></div>
        <div class="ete width" @click="SeasonSelect('Eté',$event.target.id)" id='season0'></div>
        <div class="automne width" @click="SeasonSelect('Automne',$event.target.id)" id='season1'></div>
        <div class="hiver width" @click="SeasonSelect('Hiver',$event.target.id)" id='season2'></div>
    </article>
</template>

<script>
export default {
    name: 'SeasonSelection',
    data() {
        return {
            seasonSelection: '',
        }
    },
    props: {
    },
    emits: ['seasonSelection'],
    methods: {
        SeasonSelect(season, id) {
            this.seasonSelection = this.$store.getters['season/getSeasons'](season);
            this.$emit('seasonSelection', this.seasonSelection)
            for (let i = 0; i < 4; i++) {
                if (id == 'season' + i) {
                    document.getElementById('season' + i).classList.add("selected");
                } else {
                    document.getElementById('season' + i).classList.remove("selected");
                }
            }
        }
    },
    created() {
        this.$store.dispatch('season/checkSeason');
    },
}
</script>

<style scoped>
.selectSeason {
    height: 35vh;
}

.flex {
    height: 90vh;
}

.row {
    padding-top: 5vh;
}

.selected {
    filter: brightness(50%);
}

.width {
    width: 25vw;
    background-size: cover;
    background-position: center;
}

.printemps {
    background-image: url(@/assets/SearchBySeason/printemps.jpg);

}

.ete {
    background-image: url(@/assets/SearchBySeason/ete.jpg);
}

.automne {
    background-image: url(@/assets/SearchBySeason/automne.jpg);
}

.hiver {
    background-image: url(@/assets/SearchBySeason/hiver.jpg);
}
</style>