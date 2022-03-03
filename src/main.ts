import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import { createStoragePlugin } from 'unstorage-pinia-plugin';

const pinia = createPinia();

pinia.use(createStoragePlugin());

createApp(App).use(pinia).mount('#app');
