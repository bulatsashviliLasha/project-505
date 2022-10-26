import axios from "axios";

export default {
  state: {
    sports: [],
  },
  getters: {
    getSports: (state) => state.sports,
    checkSports: (state) => {
      if (state.sports.length !== 0) {
        return;
      } else if (localStorage.getItem("sportsData")) {
        state.sports = JSON.parse(localStorage.getItem("sportsData"));
      }
    },
  },
  mutations: {
    setSports(state, payload) {
      state.sports = payload;
    },
  },
  actions: {
    async fetchSports(context) {
      await axios({
        method: "get",
        url: "https://paridirect-ussd.dev.smrtsrc.io/api/sports-book/sports?culture=en",
        headers: {
          Authorization: context.getters.getToken,
        },
      }).then((response) => {
        context.commit("setSports", response.data);
        localStorage.setItem("sportsData", JSON.stringify(response.data));
      });
    },
  },
};
