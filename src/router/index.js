import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RecipeListView from '../views/RecipeListView.vue'
import RecipeShow from '../views/RecipeShow.vue'
import RecipeCreate from '../views/RecipeCreate.vue'
import SearchBySeason from '../views/SearchBySeason.vue'
import IngredientCreate from '../views/IngredientCreate.vue'
import StepsCreate from '../views/StepsCreate.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/recipe',
    name: 'recipeList',
    component: RecipeListView
  },
  {
    path: '/recipe/:id',
    name: 'recipeShow',
    component: RecipeShow
  },
  {
    path: '/recipe/create',
    name: 'recipeCreate',
    component: RecipeCreate
  },
  {
    path: '/recipe/create/ingredient',
    name: 'ingredientCreate',
    component: IngredientCreate
  },
  {
    path: '/recipe/create/steps',
    name: 'stepsCreate',
    component: StepsCreate
  },
  {
    path: '/season/search',
    name: 'searchBySeason',
    component: SearchBySeason
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
