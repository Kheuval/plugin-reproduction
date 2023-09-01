import { useAuthenticationStore } from "../stores/AuthenticationStore";

export const addAuthenticationGuard = (router) => {
  router.beforeEach((to, from, next) => {
    const { isAuthenticated } = useAuthenticationStore();

    if (!isAuthenticated && to.path !== "/plugin") {
      next({ path: "/plugin" });
      return;
    }

    if (isAuthenticated && to.path === "/plugin") {
      next({ path: "/" });
      return;
    }

    next();
  });
};
