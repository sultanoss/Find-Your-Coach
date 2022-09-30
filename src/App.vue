<template>
  <the-header></the-header>
  <router-view v-slot="slotProps"
               mode="out-in">
    <transition name="route">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
  <div class="footer">

    <div class="imprint">
      <a href="https://www.radwansultan.de/imprint"
         target="_blank">
       Imprint
      </a>
      <a href="https://www.radwansultan.de/legalnotice"
         target="_blank">
       Legal Notice
      </a>
    </div>

    <div class="footer-icons">
      <a href="https://www.linkedin.com/in/radwan-sultan-el-kassem-a06a522b/"
         target="_blank">
        <img src="./components/Layouts/images/icons8-linkedin-circled-30.png"
             alt="github">
      </a>
      <a href="https://github.com/sultanoss"
         target="_blank">
        <img src="./components/Layouts/images/icons8-github-30.png"
             alt="github">
      </a>
    </div>


  </div>
</template>

<script>
import TheHeader from "./components/Layouts/TheHeader";

export default {
  components: {
    TheHeader
  }
};

</script>

<style>

@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
  background-color: #eaeaea;
}

.footer {
  height: 50px;
  background-color: #023b59;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-icons {
  display: flex;
  align-items: center;
}

a {
  text-decoration: none;
  margin: 10px;
}

a:active {
  border: unset;
}

/*.route-enter-from {*/
/*  opacity: 0;*/
/*  !*transform: translateY(-30px);*!*/
/*}*/

/*.route-leave-to {*/
/*  opacity: 0;*/
/*  !*transform: translateY(30px);*!*/
/*}*/

/*.route-enter-active {*/
/*  !*transition: all 225ms ease-in;*!*/
/*  transition: opacity 0.5s ease;*/
/*}*/

/*.route-leave-active {*/
/*  !*transition: all 225ms ease-in;*!*/
/*  transition: opacity 0.5s ease;*/
/*}*/

html {
  scroll-behavior: smooth;
}

</style>