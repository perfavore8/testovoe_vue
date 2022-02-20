import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import TestGovna from '../views/Main.vue';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: TestGovna,
		children: [
			{
				path: '/',
				name: 'Home',
				component: Home
			},
			{
				path: '/favourites',
				name: 'favourites',
				component: () => import('../components/FavouritesList.vue')
			}
		]
	},
	{
		path: '/about',
		name: 'Authorization',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import('../views/Autorization.vue')
	},
	{
		path: '/addfavourite',
		name: 'AddFavourite',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import('../components/AddFavourite.vue')
	},
	{
		path: '/editfavourite',
		name: 'EditFavourite',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import('../components/EditFavourite.vue')
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

export default router;
