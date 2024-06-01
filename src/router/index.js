import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ContactView from '../views/ContactView.vue';
import ProjectView from '../views/ProjectView.vue';
import ErrorView from '../views/ErrorView.vue';
import InvestorsView from '../views/InvestorsView.vue';

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
			path: '/investors',
			component: InvestorsView,
			name: 'investors'
		},
		{
			path: '/:pathMatch(.*)*',
			component: ErrorView,
			name: 'error'
		}
	]
});

router.beforeEach(to => {
	to.path === '/project'
		? document.body.classList.add('view-project')
		: document.body.classList.remove('view-project');
});

export default router;
