<template>
    <div class='row'>
        <img src="@/assets/SearchBySeason/EteArtwork.jpg" class='col s2 offset-s3 selectSeason'>
         <img src="@/assets/SearchBySeason/AutomneArtwork.jpg" class='col s2 offset-s2 selectSeason'>      
    </div>
    <div class='row'>
        <img src="@/assets/SearchBySeason/HiverArtwork.jpg" class='col s2 offset-s3 selectSeason'>
        <img src="@/assets/SearchBySeason/PrintempsArtwork.jpg" class='col s2 offset-s2 selectSeason'>    
    </div>
</template>

    <script>
        export default {
            name: 'SeasonSelection',
            data() {
                return {
                }
            },
            props: {
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
 </style>