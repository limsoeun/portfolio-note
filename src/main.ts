import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import path from "./router/path";
import store from "./store/index";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);
app.use(store);
app.use(router);
app.use(vuetify);
app.mount("#app");

// 전역변수
app.config.globalProperties.$store = store;
app.config.globalProperties.$router = router;
app.config.globalProperties.$path = path;
