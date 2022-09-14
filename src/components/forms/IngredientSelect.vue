<template lang="">
    <div>
        <label for="">Ingredient: </label>
        <select  name="" id=""  :value="ingredientRecette.ingredient" @input="setIngredient($event.target.value)">
            <option v-for="item in ingredients" :value= "item.id" :key="item.id">{{item.name}}</option>
        </select> 
        <label for="">Ajouter un nouvel Ingrédient: </label>
        <input v-model="newIngredient" type="text" name="" id="">
        <p > L'ingrédient existe déjà </p>
        <input @click="comparisonIngredient" type="submit" value="ajouter à la liste">
        <br>
        <label for="">Quantité :</label>
        <input type="text" name="quantité" id="" :value="ingredientRecette.quantity" @input="setValue($event.target.value)">
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
        ingredientRecette: {
            type: Object
        }
    },
    data() {
        return {
            values: this.ingredientRecette,

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
        },
        comparisonIngredient() {
            let add = true
            for (let i = 0; i < this.ingredients.length; i++) {
                if (this.newIngredient === this.ingredients[i].name) {
                    return add = false
                }
            }
            if (add === true) {
                this.addIngredient()
            }
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