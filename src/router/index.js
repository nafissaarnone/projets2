
import { createRouter, createWebHistory } from 'vue-router'

import ArtisteView from '../views/ArtisteView.vue'

import artistesView from '../views/artistesView.vue'

import programmationView from '../views/programmationView.vue'

import contactView from '../views/contactView.vue'

import mentionslegaleView from '../views/mentionslegaleView.vue'

import festivalView from '../views/festivalView.vue'

import concertView from '../views/concertView.vue'




const router = createRouter({

  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [

    { path: '/', name: 'Accueil', component: AccueilView },

    { path: '/artistes', name: 'artistes', component: artistesView },

    { path: '/artiste', name: 'Artiste', component: ArtisteView },

    { path: '/concert', name: 'concert', component: concertView },

    { path: '/contact', name: 'contact', component: contactView },

    { path: '/festival', name: 'festival', component: festivalView },

    { path: '/mentionslegale', name: 'Mentions Légale', component: mentionslegaleView },

    { path: '/programme', name: 'Programme', component: ProgrammationView }



    // ici les autre routes

  ]

})


export default router