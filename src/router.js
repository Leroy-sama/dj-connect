import { createRouter, createWebHistory } from "vue-router";

import DjsList from "./pages/djs/DjsList.vue";
import DjRegister from "./pages/djs/DjRegister.vue";
import DjDetails from "./pages/djs/DjDetails.vue";
import ContactDj from "./pages/requests/ContactDj.vue";
import RequestReceived from "./pages/requests/RequestReceived.vue";
import NotFound from "./pages/NotFound.vue";
import UserAuth from "./pages/auth/UserAuth.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            redirect: "/djs",
        },
        {
            path: "/djs",
            component: DjsList,
        },
        {
            path: "/djs/:id",
            component: DjDetails,
            props: true,
            children: [
                {
                    path: "contact",
                    component: ContactDj,
                },
            ],
        },
        {
            path: "/register",
            component: DjRegister,
        },
        {
            path: "/requests",
            component: RequestReceived,
        },
        {
            path: "/auth",
            component: UserAuth,
        },
        {
            path: "/:notFound(.*)",
            component: NotFound,
        },
    ],
});

export default router;
