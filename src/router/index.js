import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import artistesView from '../views/artistesView.vue'
import programmationView from '../views/programmationView.vue'
import guideView from '../views/guideVew.vue'
import contactView from '../views/contactView.vue'
import ArtisteView from '../views/ArtisteView.vue'
import mentionslegaleView from '../views/mentionslegaleView.vue'
import festivalView from '../views/festivalView.vue'
import concertView from '../views/concertView.vue'
import Page404View from '../views/Page404View.vue'
import UpdateArtistes from '../views/UpdateView.vue'
import DeleteArtistes from '../views/DeleteView.vue'
import CreateArtistes from '../views/CreateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/artistes', name: 'Artistes', component: artistesView },
    { path: '/programmation', name: 'programmation', component: programmationView },
    { path: '/style-guide', name: 'guide', component: guideView },
    { path: '/contact', name: 'contact', component: contactView },
    { path: '/Artiste', name: 'Artiste', component: ArtisteView },
    { path: '/mentionslegale', name: 'mentionslegale', component: mentionslegaleView },
    { path: '/festival', name: 'festival', component: festivalView },
    { path: '/concert', name: 'concert', component: concertView },
    { path: '/Page404', name: 'Page404', component: Page404View },
    { path: '/UpdateArtistes', name: 'UpdateView', component: UpdateArtistes },
    { path: '/DeleteArtistes', name: 'DeleteView', component: DeleteArtistes },
    { path: '/CreateArtistes', name: 'CreateView', component: CreateArtistes }


    // ici les autre routes
  ]
})

export default router
