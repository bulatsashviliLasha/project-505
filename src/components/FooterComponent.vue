<template>
  <footer>Copyright &copy; 2016 - {{ time }} Newage.</footer>
</template>

<script>
export default {
  data() {
    return {
      time: new Date().getFullYear(),
    };
  },
};
</script>

<style>
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  background-color: #2c3e50;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
