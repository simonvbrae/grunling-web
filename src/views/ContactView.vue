<template>
  <div>
    <div class="contentWrapper" :class="{ contentWrapperSmall: phone }">
      <div class="contentColumn CC-4 chlorisColumn" v-if="!phone">
        <img class="chlorisImage" src="@/assets/images/chloris2.png" />
      </div>
      <div
        class="contentColumn CC-6"
        :class="{ getInTouch: !phone, contentColumnSmall: phone }"
        style="margin-bottom: 10%; text-align: center"
      >
        <div>
          <p
            class="textAlignLeft sectionTitle"
            :class="{ sectionMarginPhone: phone }"
          >
            GET IN TOUCH
          </p>
          <img
            v-if="phone"
            :class="{ chlorisImagePhone: phone }"
            src="@/assets/images/chloris2.png"
          />

          <p class="textAlignLeft sectionContent">
            Searching for more info, interested in joining our team or looking
            for a partnership?
          </p>
          <p class="textAlignLeft sectionContent">
            You don't have the resources to invest at the moment, but want to
            stay in touch?
          </p>
          <p class="textAlignLeft sectionContent">
            <a href="mailto:info@grunling.com">Mail to info@grunling.com</a>
          </p>
        </div>
      </div>
    </div>
    <div class="contentWrapper" :class="{ contentWrapperSmall: phone }">
      <div class="contentColumn CC-45" :class="{ contentColumnSmall: phone }">
        <div style="width: 100%">
          <p
            class="sectionTitle textAlignLeft"
            :class="{ sectionMarginPhone: phone }"
          >
            WHERE TO FIND US
          </p>
          <div v-if="phone" class="mapDiv">
            <l-map
              :zoom="zoom"
              :center="center"
              :options="mapOptions"
              @update:center="centerUpdate"
              @update:zoom="zoomUpdate"
            >
              <l-tile-layer :url="url" :attribution="attribution" />
              <l-marker :lat-lng="markerLocation" />
            </l-map>
          </div>
          <br />
          <p class="sectionContent textAlignLeft">
            Grunling CV<br />
            0782.714.675<br />
            BE85 8900 1529 4406<br />
            Sint-Salvatorstraat 5, 9000 Gent
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import L, { LatLng, latLng } from "leaflet";
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default Vue.extend({
  name: "ContactView",
  components: { LMap, LTileLayer, LMarker },
  data() {
    let zoom = 16;
    let center: LatLng = latLng(51.06448892948631, 3.729019813756584);
    return {
      windowWidth: 0,

      zoom: zoom,
      currentZoom: zoom,
      center: center,
      currentCenter: center,
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      markerLocation: center,
      mapOptions: {
        zoomSnap: 0.5,
      },
      showMap: true,
    };
  },
  methods: {
    zoomUpdate(zoom: number) {
      this.currentZoom = zoom;
    },
    centerUpdate(center: LatLng) {
      this.currentCenter = center;
    },
  },
  computed: {
    phone() {
      return this.$data.windowWidth < 650;
    },
    // narrow() {
    //   return this.$data.windowWidth < 1080;
    // },
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
.getInTouch {
  margin-top: 7%;
}

.chlorisColumn {
  margin-left: 22%;
  margin-top: 5%;
}

.chlorisImage {
  margin-top: 5%;
  margin-left: 7%;
  display: flex;
  justify-self: left;
  width: 80%;
  height: 100%;
}

.chlorisImagePhone {
  display: flex;
  margin: auto;
  margin-bottom: 2%;
  width: 95%;
  height: auto;
}

.tomImage {
  border-style: solid;
  border-color: #fff8d4;
  border-width: 6px;

  display: flex;
  justify-self: left;

  margin-left: -1%;

  width: auto;
  height: 178px;
}
.tomImagePhone {
  border-style: solid;
  border-color: #fff8d4;
  border-width: 6px;
  display: block;

  width: 90%;
}
.tomimagePhoneContainer {
  display: flex;
  justify-content: center;
}

.sloganBox {
  /* TODO remove? */
  text-align: left;
  margin-left: 8.5%;
  margin-top: 5.5%;
}

.CC-4 {
  flex: 0.4;
}

.CC-6 {
  flex: 0.6;
}

.imageTextBox {
  margin-top: 2%;
  display: flex;
}

.sectionMargin {
  margin-top: 40%;
}
.sectionMarginPhone {
  margin-top: 10%;
}

.spacingInvestText {
  max-width: 65%;
}

.mapDiv {
  margin: auto;
  text-align: center;
  z-index: 0;
  height: max(320px, 30vw);
  width: max(320px, 30vw);
  margin-bottom: 2%;
}
</style>
