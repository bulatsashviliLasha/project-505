import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/sports",
    name: "sports",
    beforeEnter: guardMyRoute,
    component: () => import("../views/sport/SportsView.vue"),
  },
  {
    path: "/sports/:id",
    name: "sport-details",
    beforeEnter: guardMyRoute,
    component: () => import("@/views/sport/SingleSportView.vue"),
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    name: "not-found",
    component: () => import("@/views/not-found/404-view.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0, behavior: "smooth" });
      }, 300);
    });
  },
});

router.beforeEach((to, from, next) => {
  const firstLetterCap = to.name.at(0).toUpperCase(),
    remainingLetters = to.name.slice(1).replaceAll("-", " "),
    title = firstLetterCap + remainingLetters;

  document.title = title;

  next();
});

function guardMyRoute(to, from, next) {
  let isAuthenticated = false;
  localStorage.getItem("token")
    ? (isAuthenticated = true)
    : (isAuthenticated = false);
  isAuthenticated ? next() : next("/");
}

export default router;
