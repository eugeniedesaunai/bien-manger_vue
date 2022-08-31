import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RecipeListView from '../views/RecipeListView.vue'
import RecipeShow from '../views/RecipeShow.vue'
import RecipeCreate from '../views/RecipeCreate.vue'
import StepCreate from '../views/StepCreate.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
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
    path: '/step/create',
    name: 'stepCreate',
    component: StepCreate
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
