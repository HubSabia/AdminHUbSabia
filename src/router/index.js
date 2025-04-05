import { createRouter, createWebHistory } from 'vue-router';
import IaView from '@/components/ChatBot.vue';
import SobreView from '@/components/SobreBot.vue';
import LoginHistoryView from '@/components/LoginHistory.vue';
import Home from '@/components/HomePage.vue';
import Campanhas from '@/components/Campanhas.vue';

const router = createRouter({
  history: createWebHistory('/'), // Define BASE_URL para a raiz do site
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/',
      name: 'home',
      component: IaView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginHistoryView
    },
    {
      path: '/',
      name: '',
      component: IaView
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: SobreView
    },

    {
      path: '/Campanhas',
      name: 'Campanhas', 
      component: Campanhas
    }
  ]
});

export default router; // Exporta a variável router