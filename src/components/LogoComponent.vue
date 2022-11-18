<template>
  <div style="white-space: nowrap; background-color: coral">
    <img src="logo.png" style="max-height: 100px" />
    <div style="display: inline-block; height: 100%">
      <p class="logoTitle" style="height: 10%; vertical-align: middle">
        GRUNLING
      </p>
      <p class="logoSubtitle" style="height: 10%; vertical-align: middle">
        Impact invest
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "LogoComponent",
});
</script>

<style scoped>
.logoTitle {
  font-family: "Coinage Caps Eric Gill W01";
}
.logoSubtitle {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
</style>
