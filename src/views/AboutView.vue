<template>
  <div class="pageWrapper">
    <div class="layoutColumn">
      <p>A HOUSE WITH IMPACT</p>
      <p>Connecting impact-driven entrepreneurs</p>
      <div class="buttonBox">
        <div class="buttonRow">
          <v-btn class="text-center" outlined> Co-working </v-btn>
          <v-btn class="text-center" outlined> Meeting rooms </v-btn>
        </div>
        <div class="buttonRow">
          <v-btn class="text-center" outlined> Offices </v-btn>
          <v-btn class="text-center" outlined> Commercial spaces </v-btn>
        </div>
      </div>
    </div>
    <div class="layoutColumn">Foto komt hier hihi</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AboutView",
  components: {},
  computed: {},
  methods: {},
});
</script>

<style scoped>
.pageWrapper {
  display: flex;
  flex-direction: row;
}
.layoutColumn {
  height: 100%;
  flex: 1;
}
</style>
