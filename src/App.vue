<template>
  <div id="app" class="root">
    <div :class="{ wrapperSmall: phone, wrapper: !phone }">
      <MenuBar></MenuBar>
      <div class="body">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MenuBar from "./components/HeaderComponent.vue";

export default Vue.extend({
  name: "App",
  components: { MenuBar },
  data() {
    return {
      windowWidth: 0,
    };
  },
  computed: {
    phone() {
      return this.$data.windowWidth < 650;
    },
  },
  mounted() {
    this.$data.windowWidth = window.innerWidth;

    window.addEventListener("resize", () => {
      this.$data.windowWidth = window.innerWidth;
    });
  },
});
</script>

<style>
#app {
  background-color: rgb(0, 0, 0);
  overflow-x: hidden;
  max-width: 100vw;
}

.root {
  width: 100%;
  height: 100%;
  overflow-x: hidden; /* TODO Causes border */
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
.wrapperSmall {
  width: 100vw;
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
</style>
