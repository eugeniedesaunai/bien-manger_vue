<template>
    <div class='row'>
        <img @click="SeasonSelect('Eté',this.id)" id='ete' src="@/assets/SearchBySeason/EteArtwork.jpg" class='col s2 offset-s3 selectSeason responsive-img'>
        <img @click="SeasonSelect('Automne',this.id)" id='aut' src="@/assets/SearchBySeason/AutomneArtwork.jpg" class='col s2 offset-s2 selectSeason responsive-img'>      
    </div>
    <div class='row'>
        <img @click="SeasonSelect('Hiver',this.id)" id='hiv' src="@/assets/SearchBySeason/HiverArtwork.jpg" class='col s2 offset-s3 selectSeason responsive-img'>
        <img @click="SeasonSelect('Printemps',this.id)" id='pri' src="@/assets/SearchBySeason/PrintempsArtwork.jpg" class='col s2 offset-s2 selectSeason responsive-img'>    
    </div>
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
            methods:{
                SeasonSelect(season,id){
                    console.log(id);
                    this.seasonSelection = season;
                }
            }
        }
    </script>

 <style scoped>
 .selectSeason{
     height: 20vh;
    }

.row{
    padding-top:5vh;
}

.selected{
    filter: brightness(50%);
}

 </style>