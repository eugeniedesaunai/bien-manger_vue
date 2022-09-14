<template>
    <div class='row'>
        <img @click="SeasonSelect('Eté',$event.target.id)" id='season0' src="@/assets/SearchBySeason/EteArtwork.jpg" class='col s2 offset-s3 selectSeason responsive-img'>
        <img @click="SeasonSelect('Automne',$event.target.id)" id='season1' src="@/assets/SearchBySeason/AutomneArtwork.jpg" class='col s2 offset-s2 selectSeason responsive-img'>      
    </div>
    <div class='row'>
        <img @click="SeasonSelect('Hiver',$event.target.id)" id='season2' src="@/assets/SearchBySeason/HiverArtwork.jpg" class='col s2 offset-s3 selectSeason responsive-img'>
        <img @click="SeasonSelect('Printemps',$event.target.id)" id='season3' src="@/assets/SearchBySeason/PrintempsArtwork.jpg" class='col s2 offset-s2 selectSeason responsive-img'>    
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
                    this.seasonSelection = season;
                    for(let i=0; i < 4;i++ ){
                        if(id == 'season' + i){
                            document.getElementById('season' + i).classList.add("selected");
                        }else{
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