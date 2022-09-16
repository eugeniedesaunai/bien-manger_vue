<template lang="">
    <div class="bgGreyColor taille textCenter flex column end">
        <p>Concocté avec ♥ par Cuisisaison</p>
        <p>Tous droits réservés Marmiton.org - 1872-2022</p>
        <p>Recrutement ● Mentions légales ● Conditions Générales d'Utilisation ● Contact ● FAQ ● Politique de protection des données personnelles ● Paramétrer les cookies ● Foire aux questions - Vos choix concernant l'utilisation de cookies</p>
        <p>Pour des milliers de bêtises: lesjoiesducode.fr</p>
    </div>
</template>
<script>
export default {
    name: 'HomeFooter',
}
</script>
<style scoped>
.bgGreyColor {
    background-color: rgba(217, 211, 204, 0.5);
}

.taille {
    font-size: 0.6rem;
}

div {
    width: 100vw;
    height: 40vh;
}

@media(min-width: 768px) {
    div {
        width: 100vw;
        height: 20vh;
    }
}
</style>