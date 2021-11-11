import { createApp } from 'vue';
import App from '@/App.vue';
import '@/styles/global.postcss';
import 'windi.css';

const app = createApp(App);
const modules = Object.values(import.meta.globEager('./modules/*.ts'));

modules.forEach((module) => module.install(app));

app.mount('#app');
