<template>
  <div class="headerBar">
    <v-container style="margin-left: 3.5%; margin-right: 0%">
      <v-row>
        <v-col
          cols="5"
          align-self="start"
          style="margin-right: 1%; margin-top: 1.2%"
        >
          <router-link to="/home"
            ><LogoComponent
              v-on:click="closeMenu"
              style="width: 16.5vw; min-width: 180px"
          /></router-link>
        </v-col>
        <v-col cols="1" class="menuItem" v-if="!phone">
          <router-link
            style="text-decoration-line: none; color: black"
            to="/about"
            >About</router-link
          >
        </v-col>
        <v-col cols="1" class="menuItem" v-if="!phone">
          <router-link
            style="text-decoration-line: none; color: black"
            to="/offer"
            >Offer</router-link
          >
        </v-col>
        <v-col cols="1" class="menuItem" v-if="!phone">
          <router-link
            style="text-decoration-line: none; color: black"
            to="/invest"
            >Invest</router-link
          >
        </v-col>
        <v-col cols="1" class="menuItem" v-if="!phone">
          <router-link
            style="text-decoration-line: none; color: black"
            to="/contact"
            >Contact</router-link
          >
        </v-col>
        <input
          id="menu-toggle"
          type="checkbox"
          v-model="hamburgerMenuIsOpen"
          v-if="phone"
        />
        <label class="menu-button-container" for="menu-toggle" v-if="phone">
          <div class="menu-button"></div>
        </label>
        <ul class="menu sectionContent" v-if="phone">
          <li>
            <router-link
              style="text-decoration-line: none; color: white"
              to="/about"
              ><p v-on:click="closeMenu">About</p></router-link
            >
          </li>
          <li>
            <router-link
              style="text-decoration-line: none; color: white"
              to="/about2"
              ><p v-on:click="closeMenu">About2</p></router-link
            >
          </li>
          <li>
            <router-link
              style="text-decoration-line: none; color: white"
              to="/offer"
              ><p v-on:click="closeMenu">Offer</p>
            </router-link>
          </li>
          <li>
            <router-link
              style="text-decoration-line: none; color: white"
              to="/invest"
              ><p v-on:click="closeMenu">Invest</p></router-link
            >
          </li>
          <li>
            <router-link
              style="text-decoration-line: none; color: white"
              to="/contact"
              ><p v-on:click="closeMenu">Contact</p></router-link
            >
          </li>
        </ul>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import LogoComponent from "./LogoComponent.vue";

export default Vue.extend({
  name: "MenuBar",
  components: { LogoComponent },
  data() {
    return {
      windowWidth: 0,
      hamburgerMenuIsOpen: false,
    };
  },
  methods: {
    closeMenu: function (event: any) {
      // `this` inside methods point to the Vue instance
      this.$data.hamburgerMenuIsOpen = false;
    },
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

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Raleway);

/* * {
  font-family: "Raleway";
  box-sizing: border-box;
} */

/* .top-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #00baf0;
  background: linear-gradient(to left, #f46b45, #eea849);
  color: #fff;
  height: 50px;
  padding: 1em;
} */

.menu {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.menu > li {
  margin: 0 1rem;
  overflow: hidden;
}

.menu-button-container {
  margin: auto;
  margin-right: 10%;
  display: none;
  height: 100%;
  width: 30px;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#menu-toggle {
  display: none;
}

.menu-button,
.menu-button::before,
.menu-button::after {
  display: block;
  background-color: black;
  position: absolute;
  height: 4px;
  width: 30px;
  transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
  border-radius: 2px;
}

.menu-button::before {
  content: "";
  margin-top: -8px;
}

.menu-button::after {
  content: "";
  margin-top: 8px;
}

#menu-toggle:checked + .menu-button-container .menu-button::before {
  margin-top: 0px;
  transform: rotate(405deg);
}

#menu-toggle:checked + .menu-button-container .menu-button {
  background: rgba(255, 255, 255, 0);
}

#menu-toggle:checked + .menu-button-container .menu-button::after {
  margin-top: 0px;
  transform: rotate(-405deg);
}

@media (max-width: 700px) {
  .menuItem {
    text-decoration: none;
  }
  .menu-button-container {
    display: flex;
  }
  .menu {
    position: absolute;
    top: 0;
    margin-top: 19vh;
    left: 0;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  #menu-toggle ~ .menu li {
    height: 0;
    margin: 0;
    padding: 0;
    border: 0;
    transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  #menu-toggle:checked ~ .menu li {
    border: 1px solid #333;
    height: 2.5em;
    padding: 0.5em;
    transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
  }
  .menu > li {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0.5em 0;
    width: 100%;
    color: white;
    background-color: #222;
  }
  .menu > li:not(:last-child) {
    border-bottom: 1px solid #444;
  }
}
/**HAAAAAAAAAAAAAAAaaaa */
/**HAAAAAAAAAAAAAAAaaaa */
/**HAAAAAAAAAAAAAAAaaaa */
/**HAAAAAAAAAAAAAAAaaaa */
/**HAAAAAAAAAAAAAAAaaaa */

.headerBar {
  display: block;
  block-size: fit-content;
  width: 100%;
  height: 19vh;
}

.menuItem {
  font-family: "DM Sans";
  font-weight: bold;
  color: black;
  font-size: 20px;
  letter-spacing: 3px;

  margin: auto;
  align-items: center;

  min-width: 10%;
  margin-right: 2%;
}

/* Hamburger menu */
label .menu {
  position: absolute;
  right: -100px;
  top: -100px;
  z-index: 100;
  width: 200px;
  height: 200px;
  background: #fff;
  border-radius: 50% 50% 50% 50%;
  -webkit-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  box-shadow: 0 0 0 0 #fff, 0 0 0 0 #fff;
  cursor: pointer;
}

label .hamburger {
  position: absolute;
  top: 135px;
  left: 50px;
  width: 30px;
  height: 2px;
  background: #69d2e7;
  display: block;
  -webkit-transform-origin: center;
  transform-origin: center;
  -webkit-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
}

label .hamburger:after,
label .hamburger:before {
  -webkit-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  background: #69d2e7;
}

label .hamburger:before {
  top: -10px;
}

label .hamburger:after {
  bottom: -10px;
}

label input {
  display: none;
}

label input:checked + .menu {
  box-shadow: 0 0 0 100vw #fff, 0 0 0 100vh #fff;
  border-radius: 0;
}

label input:checked + .menu .hamburger {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

label input:checked + .menu .hamburger:after {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  bottom: 0;
}

label input:checked + .menu .hamburger:before {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  top: 0;
}

label input:checked + .menu + ul {
  opacity: 1;
}

label ul {
  z-index: 200;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  opacity: 0;
  -webkit-transition: 0.25s 0s ease-in-out;
  transition: 0.25s 0s ease-in-out;
}

label a {
  margin-bottom: 1em;
  display: block;
  color: #f38630;
  text-decoration: none;
}
/* End Hamburger menu*/
</style>
