// const { createApp } = require('vue');
// const App = require('./App.vue').default;
// require("primevue/resources/themes/viva-dark/theme.css");
// require("primevue/resources/primevue.min.css");
// const PrimeVue = require('primevue/config');
// require("primevue/resources/primevue.min.css");

// const app = createApp(App);
// app.use(PrimeVue, { ripple: true });
// app.mount("#app");


import { createApp } from 'vue'
import App from './App.vue'
import "primevue/resources/themes/viva-dark/theme.css"
import "primevue/resources/primevue.min.css";
import 'primeicons/primeicons.css';
import PrimeVue from 'primevue/config';
import router from './routes'

const app = createApp(App);
app.use(PrimeVue, { ripple: true });
app.use(router);

app.mount("#app");
// createApp(App).mount('#app')


