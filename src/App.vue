<template>
  <div id="app" class="root">
    <div class="wrapper">
      <MenuBar></MenuBar>
      <div class="body">
        <router-view />
      </div>
      <div class="footer">Footer</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MenuBar from "./components/HeaderComponent.vue";

export default Vue.extend({
  name: "App",
  components: { MenuBar },
});
</script>

<style>
#app {
  background-color: rgb(232, 230, 230);
}

.root {
  width: 100%;
  height: 100%;
}

.wrapper {
  width: 100vw;
  height: 100vh;
  max-width: 1500px;
  margin: auto;
  background-color: rgb(232, 230, 230);
  display: flex;
  flex-direction: column;
}

.body {
  flex: 1;
}

.footer {
  background-color: bisque;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

/* Functionality */
html {
  scroll-behavior: smooth;
}

/* Menu */
.menuWithBg {
  background-color: rgba(23, 87, 200, 0.4);
}
.sticky {
  z-index: 10;
  position: fixed;
  bottom: 1;
  width: 100%;
}
.menuitem {
  font-size: min(40px, 3.7vw);
  width: 18vw;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: rgb(250, 210, 001);
  display: block;
}

.menuitem:hover,
.menuitem:focus {
  border-bottom: 2px solid;
}

.active {
  border-bottom: 2px solid;
}

.logo {
  width: min(10vw, 105px);
  padding: 4px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
}

/* Main layout */
.contentDiv {
  margin: auto;
  justify-content: center;
  /* padding-top: min(15vw, 160px); */
  /* max-width: 1300px; */
  align-content: center;
  align-self: center;
  align-items: center;
}

.parent {
  overflow: auto;
}

.topHr {
  border: 10px solid rgb(45, 217, 89);
  border-radius: 5px;
  opacity: 0;
}
</style>
