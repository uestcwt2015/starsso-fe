import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import { httpPlugin } from "./assets/http";

import {
  Container,
  Header,
  Main,
  Aside,
  Footer,
  Button,
  Form,
  Input,
  FormItem,
  Select,
  Option,
  DatePicker,
  Menu,
  MenuItem,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Table,
  TableColumn
} from "element-ui";

import Block from "./layout/Block.vue";

Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Aside);
Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Select);
Vue.use(Option);
Vue.use(DatePicker);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Table);
Vue.use(TableColumn);

// Vue.use(httpPlugin);

Vue.component("block", Block);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
