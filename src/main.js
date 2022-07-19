import { createApp } from 'vue';
import App from './App.vue';
import Icon from './components/ui/Icon.vue';
import ModalBase from './components/modals/ModalBase.vue';
import CustomButton from './components/ui/CustomButton.vue';
import CustomCheckbox from './components/ui/CustomCheckbox.vue';
import CustomSelect from './components/ui/CustomSelect.vue';
import CustomInput from './components/ui/CustomInput.vue';

import './assets/scss/style.scss';

const app = createApp(App);

app.component('Icon', Icon);
app.component('ModalBase', ModalBase);
app.component('CustomButton', CustomButton);
app.component('CustomCheckbox', CustomCheckbox);
app.component('CustomSelect', CustomSelect);
app.component('CustomInput', CustomInput);

app.mount('#app');
