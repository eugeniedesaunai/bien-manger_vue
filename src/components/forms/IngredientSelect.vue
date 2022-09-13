<template lang="">
    <div>
        <select  name="" id="" >
            <option v-for="(item, index) in name" :value= "index" :key="item.id">{{item.name}}</option>
        </select> 

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