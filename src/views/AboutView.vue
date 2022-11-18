<template>
  <div class="contentWrapper">
    <div class="contentColumn">
      <div class="sloganBox">
        <p class="slogan">
          A HOUSE <br />
          WITH <br />
          IMPACT
        </p>
        <p class="subSlogan">Connecting impact-driven entrepreneurs</p>
        <div class="buttonBox">
          <div class="buttonRow">
            <v-btn class="text-center box" outlined tile> Co-working </v-btn>
            <v-btn class="text-center box" outlined tile> Meeting rooms </v-btn>
          </div>
          <div class="buttonRow">
            <v-btn class="text-center box" outlined tile> Offices </v-btn>
            <v-btn class="text-center box" outlined tile>
              Commercial spaces
            </v-btn>
          </div>
        </div>
      </div>
    </div>
    <div class="contentColumn">
      <img class="roomImg" src="@/assets/images/room.png" />
    </div>
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
br {
  display: block;
  margin: 0px;
}
.roomImg {
  width: 100%;
  height: 100%;
}

.slogan {
  font-family: "Coinage Caps Eric Gill W01";
  font-size: 530%;
  color: black;
}

.subSlogan {
  font-family: "MS Sans";
  text-align: left;
  font-weight: bold;
  font-size: 160%;
}

.sloganBox {
  text-align: left;
  margin-left: 8.5%;
  margin-top: 5.5%;
}

.box {
  font-family: "MS Sans";
  font-weight: bold;
  text-transform: none !important;
  font-size: 120%;
  margin-bottom: 3%;
  margin-right: 3%;
  padding: 10px;
  /*TODO naming*/
}
</style>
