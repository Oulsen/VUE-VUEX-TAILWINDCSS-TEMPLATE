"use strict";
// ------------------------------ IMPORTS ------------------------------ //
import { createApp } from "vue";
import App from "./App.vue";
import "./App.css";
import { createStore } from "vuex";

// ------------------------------ STORE ------------------------------ //
const store = createStore({
  state: {},
  getters: {},
  actions: {},
});

// ------------------------------ CREATE APP ------------------------------ //
createApp(App).use(store).mount("#app");
