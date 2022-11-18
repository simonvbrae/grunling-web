<template>
  <div style="white-space: nowrap; background-color: coral">
    <img src="logo.png" style="max-height: 100px" />
    <div style="display: inline-block; height: 100%">
      <p style="height: 10%; vertical-align: middle">GRUNLING</p>
      <p style="height: 10%; vertical-align: middle">Impact Invest</p>
    </div>
  </div>
  <!-- <div
    style="
      max-width: 400px;
      max-height: 100px;
      background-color: aqua;
      text-align: left; /* TODO fit to content */
    "
  >
    <v-container>
      <v-row
        ><v-col style="width: fit-content; /* TODO fit to content */">
 </v-col
        ><v-col
          ><v-container style="/* TODO fit to column size */"
            ><v-row>GRUNLING</v-row><v-row>Impact Invest</v-row></v-container
          ></v-col
        ></v-row
      >
    </v-container>
  </div> -->
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "LogoComponent",
});
</script>
