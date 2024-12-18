import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomePage,
			meta: {
				title: "Home ",
			},
		},
		{
			path: "/about",
			name: "about",
			component: () => import("@/pages/AboutPage.vue"),
			meta: {
				title: "About",
			},
		},
		{
			path: "/djs",
			name: "djs",
			component: () => import("@/pages/DjList.vue"),
			meta: {
				title: "All Djs",
			},
		},
		{
			path: "/djs/:id",
			name: "dj-detail",
			component: () => import("@/pages/DjDetail.vue"),
			meta: {
				title: "Dj Details",
			},
		},
		{
			path: "/signin",
			name: "signin",
			component: () => import("@/pages/SignInPage.vue"),
			meta: {
				title: "Sign In",
			},
		},
		{
			path: "/signup",
			name: "signup",
			component: () => import("@/pages/SignUpPage.vue"),
			meta: {
				title: "Sign Up",
			},
		},
		{
			path: "/reset",
			name: "reset",
			component: () => import("@/pages/ResetPswd.vue"),
			meta: {
				title: "Reset Password",
			},
		},
		{
			path: "/contact",
			name: "contact",
			component: () => import("@/pages/ContactDj.vue"),
			meta: {
				title: "Contact",
			},
		},
		{
			path: "/:catchAll(.*)",
			name: "not-found",
			component: () => import("@/pages/NotFound.vue"),
			meta: {
				title: "Not Found",
			},
		},
	],
});

router.beforeEach((to, from, next) => {
	document.title = `${to.meta.title} | DJConnect`;
	next();
});

export default router;
