<template>
  <header class="header-style">
    <div class="menu">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <div class="me-auto"></div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <div class="me-auto"></div>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#home"
                  >Home</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#skill">Skill</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#employment">EMPLOYMENT</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#education">Education</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contect">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import $ from 'jquery'

export default {
  mounted() {
    $(document).ready(function () {
      let nav_offset_top = $(".header-style").height() + 50;

      function navbarFixed() {
        if ($(".header-style").length) {
          $(window).scroll(function () {
            let scroll = $(window).scrollTop();
            if (scroll >= nav_offset_top) {
              $(".header-style .menu").addClass("navbar_fixed");
            } else {
              $(".header-style .menu").removeClass("navbar_fixed");
            }
          });
        }
      }

      navbarFixed();
    });
  },
};
</script>