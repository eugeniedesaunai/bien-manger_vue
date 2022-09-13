<template lang="">
    <div>
        <label for="">Ingrédient: :</label>
        <input type="text" name="" id="">
        <label for="">Quantité :</label>
        <input type="text" name="quantité" id="">
    </div>
    
</template>
<script>
export default {
    name: "IngredientSelect",
    data() {
        return {
            name: []
        }
    },

    created() {
        this.$store.dispatch('ingredient/checkIngredient');
        this.name = this.$store.getters['ingredient/listIngredient'];
    },
}
</script>
<style lang="">
    
</style>