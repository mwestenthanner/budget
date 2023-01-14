import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./stores";

const pinia = createPinia()

createApp(App)
    .use(store)
    .use(pinia)
    .use(router)
    .mount("#app");
