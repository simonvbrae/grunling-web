<template>
  <div>
    <div class="contentWrapper" v-if="!phone">
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
              <v-btn class="text-center box" outlined tile>
                Meeting rooms
              </v-btn>
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
    <div class="contentWrapperSmall" v-if="phone">
      <div class="contentColumn">
        <img class="roomImgSmall" src="@/assets/images/room.png" />
      </div>
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
              <v-btn class="text-center box" outlined tile>
                Meeting rooms
              </v-btn>
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
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AboutView",
  components: {},
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

<style scoped>
.roomImg {
  display: flex;
  justify-self: left;
  width: 98%;
  height: 100%;
}
.roomImgSmall {
  display: flex;
  margin-left: 2%;
  width: 98%;
  height: 100%;
}

.slogan {
  line-height: 120%;
  font-family: "Coinage Caps Eric Gill W01";
  font-size: 530%;
  letter-spacing: 3px;
  color: black;
}

.subSlogan {
  font-family: "DM Sans";
  text-align: left;
  font-weight: bold;
  font-size: 120%;
  letter-spacing: 5px;
  color: black;

  margin-top: 4%;
}

.sloganBox {
  text-align: left;
  margin-left: 8.5%;
  margin-top: 5.5%;
}

.box {
  font-family: "DM Sans";
  font-weight: bold;
  text-transform: none !important;
  font-size: 120%;
  margin-bottom: 3%;
  margin-right: 10%;
  padding: 10px;
  /*TODO naming*/
}

.buttonBox {
  margin-top: 10%;
}
</style>
