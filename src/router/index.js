import { createRouter, createWebHistory } from 'vue-router';
import ChuckNorrisFacts from '../components/ChuckNorrisFacts.vue';

const routes = [
  {
    path: '/',
    name: 'ChuckNorrisFacts',
    component: ChuckNorrisFacts
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
