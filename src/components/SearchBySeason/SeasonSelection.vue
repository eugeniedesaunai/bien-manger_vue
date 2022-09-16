<template>
    <article class="flex column heigtImg">
        <div @click="SeasonSelect('Printemps',$event.target.id)" id='season3'
            class="printemps width flex alignCenter justifyCenter">
            <p class="widthTitle"> Printemps</p>
        </div>
        <div @click="SeasonSelect('Eté',$event.target.id)" id='season0'
            class="ete width flex alignCenter justifyCenter">
            <p class="widthTitle"> Été</p>
        </div>
        <div @click="SeasonSelect('Automne',$event.target.id)" id='season1'
            class="automne width flex alignCenter justifyCenter">
            <p class="widthTitle">Automne</p>
        </div>
        <div @click="SeasonSelect('Hiver',$event.target.id)" id='season2'
            class="hiver width flex alignCenter justifyCenter">
            <p class="widthTitle">Hiver</p>
        </div>
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
.widthTitle {
    font-size: 1.5rem;
    background-color: rgba(217, 211, 204, 0.5);
    padding: 1rem;
    border-radius: 1rem;
}

.selectSeason {
    height: 35vh;
}

.row {
    padding-top: 5vh;
}

.selected {
    filter: brightness(50%);
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


.width {
    height: 25vh;
    width: 100vw;
    background-size: cover;
    background-position: center;
}

@media(min-width: 768px) {
    .width {
        height: 91vh;
        width: 25vw;
        background-size: cover;
        background-position: center;
    }

    .column {
        flex-direction: row;
    }
}
</style>