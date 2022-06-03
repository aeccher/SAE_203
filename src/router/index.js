import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ProgrammationView from '../views/ProgrammationView.vue'
import ArtistesView from '../views/ArtistesView.vue'
import FestivalView from '../views/FestivalView.vue'
import ContactView from '../views/ContactView.vue'
import MentionsLegalesView from '../views/MentionsLegalesView.vue'
import ConcertView from '../views/ConcertView.vue'
import ArtisteView from '../views/ArtisteView.vue'
import StyleGuideView from '../views/StyleGuideView.vue'
import NotFound from '../views/NotFound.vue'
import CreateProgrammation from '../views/CreateProgrammationView.vue'
import UpdateProgrammation from '../views/UpdateProgrammationView.vue'
import DeleteProgrammation from '../views/DeleteProgrammationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/programmation', name: 'Programmation', component: ProgrammationView },
    { path: '/artistes', name: 'Artistes', component: ArtistesView },
    { path: '/festival', name: 'Festival', component: FestivalView },
    { path: '/contact', name: 'Contact', component: ContactView },
    { path: '/mentionslegales', name: 'MentionsLegales', component: MentionsLegalesView },
    { path: '/concert', name: 'Concert', component: ConcertView },
    { path: '/artiste/:id', name: 'Artiste', component: ArtisteView },
    { path: '/style-guide', name: 'StyleGuide', component: StyleGuideView },
    {
      path: '/404', alias: '/:catchAll(.*)', name: 'NotFound', component: NotFound
    },
    { path: '/createProgrammation', name: 'CreateProgrammation', component: CreateProgrammation },
    { path: '/updateProgrammation/:id', name: 'UpdateProgrammation', component: UpdateProgrammation },
    { path: '/deleteProgrammation/:id', name: 'DeleteProgrammation', component: DeleteProgrammation },
  ]
})

export default router
