<template>
  <div class="login-view px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div>
        <img
          class="mx-auto h-12 w-auto"
          src="https://newage.io/wp-content/uploads/2021/09/logo.svg"
          alt="Your Company"
        />
        <h2
          class="mt-6 text-center text-2xl font-bold tracking-tight text-gray-900"
        >
          Sign in to your account
        </h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="login">
        <div class="-space-y-px rounded-md shadow-sm">
          <input
            v-model="form.login"
            id="email-address"
            name="email"
            type="email"
            autocomplete="email"
            required=""
            class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="test@newage.io"
          />
          <input
            v-model="form.password"
            id="password"
            name="password"
            type="password"
            autocomplete="current-password"
            required=""
            class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            placeholder="Password"
          />
        </div>
        <div>
          <button
            type="submit"
            class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      form: {
        login: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapMutations(["setToken"]),
    login() {
      this.$store.dispatch("loginUser", this.form);
    },
    storeTokenInVuex() {
      if (localStorage.getItem("token")) {
        this.setToken(localStorage.getItem("token"));
        this.$router.push("/sports");
      }
    },
  },
  beforeMount() {
    this.storeTokenInVuex();
  },
};
</script>

<style lang="scss">
.login-view {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 150px;
}
</style>
