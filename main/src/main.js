import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import { Plugin } from '@plugin/plugin';

const app = createApp(App);

const pluginOptions = { router };

app.use(Plugin, pluginOptions);
app.use(router);

app.mount('#app');
