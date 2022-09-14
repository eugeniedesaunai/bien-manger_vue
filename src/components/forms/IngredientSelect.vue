<template lang="">
    <div>
        <label for="">Ingredient: </label>
        <select  name="" id=""  :value="myObject.ingredient" @input="setIngredient($event.target.value)">
            <option v-for="item in ingredients" :value= "item.id" :key="item.id">{{item.name}}</option>
        </select> 
        <label for="">Ajouter un nouvel Ingrédient: :</label>
        <input v-model="newIngredient" type="text" name="" id="">
        <input @click="addIngredient" type="submit" value="ajouter à la liste">
        <br>
        <label for="">Quantité :</label>
        <input type="text" name="quantité" id="" :value="myObject.quantity" @input="setValue($event.target.value)">
    </div>
</template>
<script>
export default {
    name: "IngredientSelect",
    computed: {
        ingredients() {
            return this.$store.getters['ingredient/listIngredient'];
        }
    },
    props: {
        myObject: {
            type: Object
        }
    },
    data() {
        return {
            values: this.myObject,
            newIngredient: {},
        }
    },
    methods: {
        setValue(val) {
            this.values.quantity = val
            this.$emit('update:myObject', this.values)
        },
        setIngredient(ingredient) {
            this.values.ingredient = ingredient;
            this.$emit('update:myObject', this.values)
        },
        addIngredient() {
            this.$store.dispatch("ingredient/add", this.newIngredient)

        }
    },
    emits: ['update:myObject'],
    created() {
        this.$store.dispatch('ingredient/checkIngredient');
    },
}
</script>
<style lang="">
    
</style>