import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ContactView from '../views/ContactView.vue';
import ProjectView from '../views/ProjectView.vue';
import ErrorView from '../views/ErrorView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			component: HomeView,
			name: 'home'
		},
		{
			path: '/about',
			component: AboutView,
			name: 'about'
		},
		{
			path: '/contact',
			component: ContactView,
			name: 'contact'
		},
		{
			path: '/project',
			component: ProjectView,
			name: 'project'
		},
		{
			path: '/:pathMatch(.*)*',
			component: ErrorView,
			name: 'error'
		}
	]
});

export default router;
