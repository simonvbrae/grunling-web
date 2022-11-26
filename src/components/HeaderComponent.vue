<template>
  <div class="headerBar">
    <v-container style="margin-left: 3.5%; margin-right: 0%">
      <v-row>
        <v-col
          cols="5"
          align-self="start"
          style="margin-right: 1%; margin-top: 1.2%"
        >
          <LogoComponent style="width: 16.5vw; min-width: 180px" />
        </v-col>
        <v-col cols="1" class="menuItem"> About </v-col>
        <v-col cols="1" class="menuItem"> Offer </v-col>
        <v-col cols="1" class="menuItem"> Invest </v-col>
        <v-col cols="1" class="menuItem"> Contact </v-col>
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
});
</script>
<style scoped>
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
</style>
