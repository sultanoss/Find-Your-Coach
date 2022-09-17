import { createApp } from "vue";

import BasSpinner from "./components/UI/BaseSpinner.vue";
import BaseBadge from "./components/UI/BaseBadge.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import BaseCard from "./components/UI/BaseCard.vue";
import router from "./router";
import store from "./Store/index.js";
import App from "./App";


const app = createApp(App);

app.use(router);
app.use(store);
app.component("base-spinner", BasSpinner);
app.component("base-badge", BaseBadge);
app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.mount("#app");
