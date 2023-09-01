import { mergeRoutes } from "@plugin/utils/mergeRoutes";
import { pluginRoutes } from "@plugin/router/index";
import { addAuthenticationGuard } from "./utils/addAuthenticationGuard";
import { createPinia } from "pinia";

export const Plugin = {
  install(app, options) {
    const { router } = options;
    mergeRoutes(router, pluginRoutes);
    addAuthenticationGuard(router);
    app.use(createPinia());
  },
};
