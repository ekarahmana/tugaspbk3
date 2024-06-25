import { createRouter, createWebHistory } from 'vue-router';
import Albums from '../components/Albums.vue';
import Photos from '../components/Photos.vue';
import Post from '../components/post.vue';
import Todos from '../components/TaskList.vue';

const routes = [
  { path: '/albums', component: Albums },
  { path: '/albums/:id', component: Photos },
  { path: '/post', component: Post },
  { path: '/todos', component: Todos }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
