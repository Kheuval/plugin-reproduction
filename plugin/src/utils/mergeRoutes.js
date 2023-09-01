export const mergeRoutes = (router, pluginRoutes) => {
    const routes = router.getRoutes();
  
    pluginRoutes.forEach((route) => {
      router.addRoute(route);
    });
  };