import { createApp } from 'vue';
import App from './App.vue';
import Icon from './components/ui/Icon.vue';

import './assets/scss/style.scss';

const app = createApp(App);

app.component('Icon', Icon);

app.mount('#app');
