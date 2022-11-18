<template>
  <div class="headerBar">
    <v-container>
      <v-row
        ><v-col><LogoComponent></LogoComponent></v-col><v-col>About</v-col
        ><v-col>About2</v-col><v-col>About3</v-col><v-col>About4</v-col
        ><v-col>About5</v-col></v-row
      >
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
  background-color: aqua;
  display: block;
  block-size: fit-content;
  width: 100%;
  height: fit-content;
}
</style>
