<template lang="">
         <div>
        <label for="">Ingrédient: </label>
        <select  name="" id=""  :value="ingredientRecette.ingredient" @input="setIngredient($event.target.value)">
            <option v-for="item in ingredients" :value= "item.id" :key="item.id">{{item.name}}</option>
        </select> 
        <label for="">Ajouter un nouvel Ingrédient: </label>
        <input v-model="newIngredient" type="text" name="" id="">
        <p v-if="this.alreadyExists=== false"> L'ingrédient existe déjà </p>
        <input class="btn waves-effect waves-light" @click="comparisonIngredient" type="submit" value="ajouter à la liste">
        <br>
        <label for="">Quantité :</label>
        <input type="text" name="quantité" id="" :value="ingredientRecette.quantity" @input="setQuantity($event.target.value)">
        <label for="">Unité :</label>
        <input type="text" name="unité" id="" :value="ingredientRecette.unit" @input="setUnit($event.target.value)">
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
            alreadyExists: ''
        }
    },
    methods: {
        setQuantity(quantity) {
            this.values.quantity = quantity
            this.$emit('update:ingredientRecette', this.values)
        },
        setUnit(unit) {
            this.values.unit = unit
            this.$emit('update:ingredientRecette', this.values)
        },

        setIngredient(ingredient) {
            this.values.ingredient = ingredient;
            this.$emit('update:ingredientRecette', this.values)
        },
        addIngredient() {
            this.$store.dispatch("ingredient/addNewIngredient", this.newIngredient)
        },

        //permet de vérifier si l'ingrédient existe déjà
        comparisonIngredient() {
            let add = true
            for (let i = 0; i < this.ingredients.length; i++) {
                if (this.newIngredient === this.ingredients[i].name) {
                    this.alreadyExists = false
                    add = false
                }
            }
            if (add === true) {
                this.addIngredient()
            }
        }
    },
    emits: ['update:ingredientRecette'],
    created() {
        this.$store.dispatch('ingredient/checkIngredient');
    },
}
</script>
<style scoped>
.width {
    width: 40%;
}
</style>