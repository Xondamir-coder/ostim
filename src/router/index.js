import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ContactView from '../views/ContactView.vue';
import CatalogView from '../views/CatalogView.vue';
import MainView from '../views/MainView.vue';
import ErrorView from '../views/ErrorView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			component: HomeView,
			name: 'home',
		},
		{
			path: '/main',
			component: MainView,
			name: 'main',
		},
		{
			path: '/about',
			component: AboutView,
			name: 'about',
		},
		{
			path: '/contact',
			component: ContactView,
			name: 'contact',
		},
		{
			path: '/catalog',
			component: CatalogView,
			name: 'catalog',
		},
		{
			path: '/:pathMatch(.*)*',
			component: ErrorView,
			name: 'error',
		},
	],
});

export default router;
