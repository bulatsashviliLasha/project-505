<template>
  <div>
    <h2>All Sports here</h2>
    <div class="sports-view">
      <router-link
        v-for="sport in getSports"
        :key="sport.id"
        :to="{ name: 'sport-details', params: { id: sport.c } }"
      >
        <div>{{ sport.n }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["fetchSports"]),
    sportExistence() {
      if (!localStorage.getItem("sportsData")) {
        this.fetchSports();
      } else {
        return this.checkSports;
      }
    },
  },
  computed: {
    ...mapGetters({ checkSports: "checkSports", getSports: "getSports" }),
  },
  beforeMount() {
    this.sportExistence();
  },
};
</script>

<style lang="scss" scoped>
.sports-view {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 10px;
  gap: 5px;

  a {
    padding: 5px;
    background: #2c3e50;
    color: white;
    border: 1px solid black;
  }
}

h2 {
  font-size: 27px;
  font-weight: bold;
}
</style>
