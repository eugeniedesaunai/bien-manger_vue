<template lang="">
<NavBar></NavBar>
<div>
    <input type="text" v-model="eugenie">
    <IngredientSelect class="taille" v-for="i in ingredients" :key="i"></IngredientSelect>  
    <input @click="addFormElement"  type="button" value="+">
    <div></div>
    <CreateIngredient class="taille"></CreateIngredient>  
</div>
</template>
<script>
import CreateIngredient from '@/components/forms/CreateIngredient.vue'
import IngredientSelect from '@/components/forms/IngredientSelect.vue'
import NavBar from '@/components/NavBar.vue';
export default {
    name: 'IngredientCreate',
    components: {
        IngredientSelect,
        NavBar,
        CreateIngredient
    },
    data() {
        return {
            ingredients: [{}],
            eugenie: "muse"
        }
    },
    methods: {
        addFormElement: function () {
            console.log("cc")
            this.ingredients.push({})
        }
    },
}
</script>
<style scoped>
.taille {
    width: 50vw;
}
</style>