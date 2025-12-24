import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import ShowDetails from '../views/ShowDetails.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Dashboard },
    { path: '/show/:id', component: ShowDetails }
  ]
});