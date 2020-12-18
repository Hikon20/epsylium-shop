import Vue from 'vue'
import VueRouter from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Connexion from '../views/Connexion.vue'
import Inscription from '../views/Inscription.vue'
import Compte from '../views/Compte.vue'
import Boutique from '../views/Boutique.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil
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
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
export default router
