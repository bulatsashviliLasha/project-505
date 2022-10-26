<template>
  <div class="single-sport-view">
    <div>
      <h2>{{ id }}</h2>
      <template v-if="$store.state.generatedImg">
        <img :src="$store.state.generatedImg" alt="img" />
      </template>
    </div>
    <router-link to="/sports" class="single-sport-view--btn animate-bounce"
      >Go back</router-link
    >
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  methods: {
    ...mapActions(["getImg"]),
  },
  beforeMount() {
    this.getImg(this.id);
  },
};
</script>

<style lang="scss">
.single-sport-view {
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 120px;
    flex-wrap: wrap;
    gap: 50px;
    margin-bottom: 25px;

    img {
      width: 230px;
      height: 220px;
      object-fit: cover;
      border-radius: 150px;
    }
    h2 {
      font-size: 27px;
      font-weight: bold;
      text-transform: capitalize;
    }
  }
  &--btn {
    background-color: white;
    border: 0;
    border-radius: 12px;
    color: #2c3e50;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    line-height: 2.5;
    outline: transparent;
    padding: 0 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border: 1px solid #2c3e50;
    &:hover {
      color: #ffffff;
      background: #2c3e50;
      transition: 0.5s;
    }
  }
}
</style>
