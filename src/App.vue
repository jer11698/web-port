<template>
  <NavbarWeb />
  <router-view />
  <FooterWeb />
</template>

<script>
import NavbarWeb from "./components/NavbarWeb.vue";
import FooterWeb from "./components/FooterWeb.vue";

export default {
  name: "App",
  components: {
    NavbarWeb,
    FooterWeb,
  },
};
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.min.css";
@import url(./assets/style/style.css);

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
