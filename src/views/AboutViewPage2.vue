<template>
  <div
    :class="{
      contentWrapper: !phone,
      contentWrapperSpacing: !phone,
      contentWrapperSmall: phone,
    }"
  >
    <div
      class="contentColumn CC-3-Fifths"
      :class="{ contentColumnSmall: phone, leftColumnSpacing: !phone }"
      style="margin: auto"
    >
      <div class="alignLeft">
        <div class="sectionTitle">OUR HOUSE</div>
        <img
          v-if="phone"
          class="houseImagePhone"
          src="@/assets/images/house.png"
        />

        <div class="sectionContent" style="margin-top: 2%">
          Originally built in the 19th century, the building housed multiple
          generations of pharmacists. Since 2022 the house has been in the hands
          of a new generation - Grunling.
        </div>
        <div class="sectionTitle" style="margin-top: 6.5%">
          A TOTAL MAKEOVER
        </div>
        <div class="sectionContent" style="margin-top: 2%">
          At the moment the house is receiving a total makeover in order to
          become energy-efficient and to be ready for the upcoming activities,
          starting in 2023.
        </div>
        <div class="sectionTitle" style="margin-top: 8.5%">
          FLORDI PARTNERSHIP
        </div>
        <div class="imageTextBox">
          <img
            v-if="!phone"
            class="flowerImage"
            src="@/assets/images/flowers.png"
          />
          <div>
            <p class="sectionContent">
              No better place than a bar to bring people together. This is why
              Grunling has a partnership with Café Flordi next door - an old
              flower shop that was turned into a bar - opening in 2023.
            </p>
            <p class="sectionContent" style="margin-top: 8%">
              Flordi gives the opportunity to meet up in a more relaxed setting
              while enjoying a fresh, vegan dish, or a local beer.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="!phone"
      class="contentColumn CC-2-Fifths"
      style="display: inline; text-align: right"
    >
      <img class="houseImage" src="@/assets/images/house.png" />
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
.houseImage {
  text-align: right;
  width: 100%;
  height: 100%;
}

.houseImagePhone {
  padding-top: 0%;
  text-align: right;
  width: 95%;
}

.flowerImage {
  text-align: right;
  margin-right: 4%;
  margin-left: 1%;
  margin-top: 1%;
  width: 27%;
  height: 20%;
}

.CC-2-Fifths {
  flex: 2;
}

.CC-3-Fifths {
  flex: 3;
}

.alignLeft {
  text-align: left;
}

.imageTextBox {
  margin-top: 2%;
  display: flex;
}

.leftColumnSpacing {
  padding-right: 15%;
  margin-left: 3%;
}

.contentWrapperSpacing {
  margin-left: 1.3%;
  margin-right: 11%;
  padding-top: 3vh;
}
</style>
