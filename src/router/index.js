import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomePage,
		},
		{
			path: "/about",
			name: "about",
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import("@/pages/AboutPage.vue"),
		},
		{
			path: "/djs",
			name: "djs",
			component: () => import("@/pages/DjList.vue"),
		},
		{
			path: "/djs/:id",
			name: "dj-detail",
			component: () => import("@/pages/DjDetail.vue"),
			children: [
				{
					path: "contact",
					name: "contact-dj",
					component: () => import("@/pages/ContactDj.vue"),
				},
			],
		},
		{
			path: "/signin",
			name: "signin",
			component: () => import("@/pages/SignInPage.vue"),
		},
		{
			path: "/signup",
			name: "signup",
			component: () => import("@/pages/SignUpPage.vue"),
		},
		{
			path: "/reset",
			name: "reset",
			component: () => import("@/pages/ResetPswd.vue"),
		},
		{
			path: "/contact",
			name: "contact",
			component: () => import("@/pages/ContactDj.vue"),
		},
		{
			path: "/:catchAll(.*)",
			name: "not-found",
			component: () => import("@/pages/NotFound.vue"),
		},
	],
});

export default router;
