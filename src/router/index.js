import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import artistesView from '../views/artistesView.vue'
import programmationView from '../views/programmationView.vue'
import guideView from '../views/guideVew.vue'
import contactView from '../views/contactView.vue'
import ArtisteView from '../views/ArtisteView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/artistes', name: 'Artistes', component: artistesView },
    { path: '/programmation', name: 'programmation', component: programmationView },
    { path: '/guide', name: 'guide', component: guideView },
    { path: '/contact', name: 'contact', component: contactView },
    { path: '/Artiste', name: 'Artiste', component: ArtisteView }
    // ici les autre routes
  ]
})

export default router
