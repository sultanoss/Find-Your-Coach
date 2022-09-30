import { createRouter, createWebHistory } from "vue-router";

//Routes Registration
import CoacheDetail from "./pages/coaches/CoachDetail";
import CoachesList from "./pages/coaches/CoachesList";
import CoacheRegistration from "./pages/coaches/CoacheRegistration";
import ContactCoach from "./pages/repuests/ContactCoach";
import RequestsReceived from "./pages/repuests/RequestsReceived";
import NoFound from "./pages/NotFound";
import UserAuth from "@/pages/auth/UserAuth";
import store from "./Store/index";

// Create Routes
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/coaches" },
    { path: "/coaches", component: CoachesList },
    {
      path: "/coaches/:id", component: CoacheDetail,
      props: true,
      children: [
        { path: "contact", component: ContactCoach } // /coaches/c1/contact
      ]
    },
    { path: "/register", component: CoacheRegistration },
    { path: "/requests", component: RequestsReceived, meta: { requiresAuth: true } },
    { path: "/auth", component: UserAuth, meta: { requiresUnauth: true } },
    { path: "/:notFound(.*)", component: NoFound }
  ],
});

router.beforeEach(function(to, from, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next("/auth");
  } else if ((to.meta.requiresUnauth && store.getters.isAuthenticated)) {
    next("/coaches");
  } else {
    next();
  }
});

export default router;