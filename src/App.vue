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
</style>
