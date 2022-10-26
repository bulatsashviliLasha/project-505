<template>
  <header v-if="routeCheck">
    <a href="https://newage.io/" target="_blank">
      <img
        src="https://newage.io/wp-content/uploads/2021/09/logo.svg"
        alt="Logo"
      />
    </a>
    <a class="log-out" @click="logOut">Log out</a>
  </header>
</template>

<script>
export default {
  methods: {
    logOut() {
      window.localStorage.removeItem("token");
      this.$router.push("/");
    },
  },
  computed: {
    routeCheck() {
      if (this.$route.name === "login" || this.$route.name === "notFound") {
        return false;
      } else {
        return true;
      }
    },
  },
};
</script>

<style scoped lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  position: fixed;
  width: 100%;
  z-index: 10;
  background: white;
  border-bottom: 0.1px solid black;

  .log-out {
    border: 1px solid #000;
    border-radius: 5px;
    font-size: 13px;
    line-height: 16px;
    padding: 12px 18px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background-color: #000;
      color: white;
      transition: 0.5s;
    }
  }
}
</style>
