import { createStore } from "vuex";
import state from "./modules/state";
import getters from "./modules/getters";
import mutations from "./modules/mutations";

export default createStore({
  state: state,
  getters: getters,
  mutations: mutations,
  actions: {},
  modules: {},
  plugins: [],
});
