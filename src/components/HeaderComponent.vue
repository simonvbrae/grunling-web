<template>
  <div class="headerBar">
    <v-container style="margin-left: 3.5%; margin-right: 0%">
      <v-row>
        <v-col
          cols="5"
          align-self="start"
          style="margin-right: 1%; margin-top: 1.2%"
        >
          <LogoComponent style="width: 16.5vw" />
        </v-col>
        <v-col cols="1" class="idk"> About </v-col>
        <v-col cols="1" class="idk"> Offer </v-col>
        <v-col cols="1" class="idk"> Invest </v-col>
        <v-col cols="1" class="idk"> Contact </v-col>
        <!-- <v-col cols="1" class="idk"> <v-btn>btn</v-btn> </v-col> -->
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

.idk {
  font-family: "DM Sans";
  font-weight: bold;
  font-size: 20px;
  margin: auto;
  margin-right: 2%;
  align-items: center;
}
</style>
