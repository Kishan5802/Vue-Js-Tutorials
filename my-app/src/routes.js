import { createWebHistory, createRouter } from "vue-router";
import SignUpForm from './components/pages/SignUpForm.vue'
import Login from './components/pages/Login.vue'
import Home from './components/pages/Home.vue'

const routes = [
  {
    name: 'SignUpForm',
    path: '/register-user',
    component: SignUpForm
  },
  {
    name: 'Login',
    path: '/login-user',
    component: Login
  },
  {
    name: 'Home',
    path: '/',
    component: Home
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;