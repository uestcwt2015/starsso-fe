import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import { httpPlugin } from "./assets/http";

import {
  Container,
  Header,
  Main,
  Button,
  Form,
  Input,
  FormItem,
  Select,
  Option,
  DatePicker
} from "element-ui";

Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Select);
Vue.use(Option);
Vue.use(DatePicker);

// Vue.use(httpPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
