import { createApp } from "vue";
import App from "@plugin/App.vue";
import router from "@plugin/router";
import { createPinia } from "pinia";
import { addAuthenticationGuard } from "./utils/addAuthenticationGuard";

const app = createApp(App);

app.use(createPinia());
app.use(router);
addAuthenticationGuard(router);

app.mount("#app");
