import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import router from "@/router";
import sportModule from "@/store/sports/sports-module.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    generatedImg: null,
  },
  getters: {
    getToken: (state) => state.token,
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload;
    },
    setGeneratedImg(state, payload) {
      state.generatedImg = payload;
    },
  },
  actions: {
    async loginUser(state, form) {
      await axios
        .post("https://paridirect-ussd.dev.smrtsrc.io/api/auth/signin", form)
        .then((response) => {
          state.commit("setToken", response.data.token);
          localStorage.setItem("token", response.data.token);
          router.push("/sports");
        })
        .catch(() => {
          new Notyf().error("Incorrect email/password");
        });
    },
    async getImg(state, id) {
      await axios
        .get(
          `https://pixabay.com/api/?key=30833788-494dc64aa08b89523e3c15c5b&q=${id}&image_type=photo`
        )
        .then((res) => {
          state.commit("setGeneratedImg", res?.data?.hits[0]?.webformatURL);
        });
    },
  },
  modules: {
    sportModule,
  },
});
