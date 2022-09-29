import { createApp } from "vue";
import PrimeVue from 'primevue/config';

import BaseDialog from "./components/UI/BaseDialog.vue";
import BasSpinner from "./components/UI/BaseSpinner.vue";
import BaseBadge from "./components/UI/BaseBadge.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import BaseCard from "./components/UI/BaseCard.vue";
import router from "./router";
import store from "./Store/index.js";
import App from "./App";

//Primevue Imports
import Checkbox from 'primevue/checkbox';
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import 'primeicons/primeicons.css'
import Menu from 'primevue/menu';



const app = createApp(App);

app.use(PrimeVue);
app.use(router);
app.use(store);
app.component("base-dialog",BaseDialog)
app.component("base-spinner", BasSpinner);
app.component("base-badge", BaseBadge);
app.component("base-card", BaseCard);
app.component("base-button", BaseButton);

//Primevue components
app.component('Toolbar', Toolbar);
app.component('Button',Button)
app.component('Checkbox',Checkbox)
app.component('toggle-menu',Menu)


app.mount("#app");
