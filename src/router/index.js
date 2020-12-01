import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Connexion from '../components/Connexion.vue'
import Inscription from '../components/Inscription.vue'
import Compte from '../components/Compte.vue'
import Boutique from '../components/Boutique.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/Connexion',
    name: 'Connexion',
    component: Connexion
  },
  {
    path:'/Inscription',
    name: 'Inscription',
    component: Inscription
  },
  {
    path:'/Compte',
    name: 'Compte',
    component: Compte
  },
  
  {
    path:'/Boutique',
    name: 'Boutique',
    component: Boutique
  },
  
 
  
 
]

const router = new VueRouter({
  routes
})

export default router
