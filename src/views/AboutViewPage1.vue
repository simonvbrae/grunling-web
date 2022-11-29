<template>
  <div class="viewBackgroundDiv">
    <div
      :class="{
        contentWrapper: !phone,
        marginLeft: !phone,
        paddingTop: !phone,
        contentWrapperSmall: phone,
      }"
    >
      <div
        class="contentColumn CC-1-Third"
        :class="{ contentColumnSmall: phone }"
      >
        <img class="chlorisImage" src="@/assets/images/chloris.png" />
      </div>
      <div
        class="contentColumn CC-2-Thirds"
        :class="{
          spacingRight: !phone,
          contentColumnSmall: phone,
          bottomSectionSmall: phone,
        }"
      >
        <div class="textAlignLeft">
          <div class="sectionContent" :class="{ centerText: phone }">
            Founded in 2022 by 5 young investors, Grunling's mission is to make
            the world a better place. Just as you should teach people how to
            fish intead of giving them fish, we believe that the biggest impact
            can be made by teaching people how to build an impact-driven
            venture, instead of giving them a job.
          </div>
          <div>
            <div style="margin-top: 8%">
              <div class="sectionTitle">A HOUSE WITH IMPACT</div>
              <div
                class="sectionContent"
                :class="{ contentWrapperSmall: phone }"
                style="display: flex; margin-top: 2%"
              >
                <div
                  :class="{ contentColumn: !phone, contentColumnSmall: phone }"
                  style="padding-right: 10%"
                >
                  <p>
                    <strong>Connecting impact-driven entrepreneurs</strong> with
                    experienced business-people, turned out to be the best way
                    to strengthen them.
                  </p>
                </div>
                <div
                  :class="{ contentColumn: !phone, contentColumnSmall: phone }"
                >
                  <p>
                    <strong>Offices, co-working and commercial spaces</strong>
                    are all at your disposal on Grunling's 450m² premises.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div style="margin-top: 3%">
            <div class="sectionTitle">A HOUSE WITH FOCUS & GUARANTEE</div>
            <div
              class="sectionContent"
              :class="{ contentWrapperSmall: phone }"
              style="display: flex; margin-top: 2%"
            >
              <div
                :class="{ contentColumn: !phone, contentColumnSmall: phone }"
                style="padding-right: 10%"
              >
                <p>
                  <strong>Social entrepreneurs</strong>, co-operative start-ups
                  and not-for-profit organizations with society-oriented goals
                  fit in perfectly.
                </p>
              </div>

              <div
                :class="{ contentColumn: !phone, contentColumnSmall: phone }"
              >
                <p>
                  <strong>Democratic control</strong> is implemented by the
                  co-operants in Grunling's solid bylaws to safeguard the
                  ethical objectives of the cooperation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      :class="{
        contentWrapper: !phone,
        contentWrapperSpacing: !phone,
        contentWrapperSmall: phone,
        secondPageFullScreen: !phone,
      }"
    >
      <div
        class="contentColumn CC-3-Fifths textAlignLeft"
        :class="{ contentColumnSmall: phone, leftColumnSpacing: !phone }"
      >
        <div>
          <div class="sectionTitle textAlignLeft">OUR HOUSE</div>
          <img
            v-if="phone"
            class="houseImagePhone"
            src="@/assets/images/house.png"
          />

          <div class="sectionContent textAlignLeft" style="margin-top: 2%">
            Originally built in the 19th century, the building housed multiple
            generations of pharmacists. Since 2022 the house has been in the
            hands of a new generation - Grunling.
          </div>
          <div class="sectionTitle textAlignLeft" style="margin-top: 6.5%">
            A TOTAL MAKEOVER
          </div>
          <div class="sectionContent textAlignLeft" style="margin-top: 2%">
            At the moment the house is receiving a total makeover in order to
            become energy-efficient and to be ready for the upcoming activities,
            starting in 2023.
          </div>
          <div class="sectionTitle textAlignLeft" style="margin-top: 8.5%">
            FLORDI PARTNERSHIP
          </div>
          <div class="imageTextBox textAlignLeft">
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
                Flordi gives the opportunity to meet up in a more relaxed
                setting while enjoying a fresh, vegan dish, or a local beer.
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
  methods: {},
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
.CC-2-Fifths {
  flex: 2;
}

.chlorisImage {
  margin: auto;
  margin-top: 10px;
  width: 90%;
  height: auto;
}

.CC-1-Third {
  flex: 1;
  color: red;
}

.CC-2-Thirds {
  flex: 2;
}

.spacingRight {
  margin-top: 0.5%;
  padding-right: 5%;
  margin-left: 3%;
}

.paddingTop {
  padding-top: 6vh;
}

.bottomSectionSmall {
  margin-top: 10%;
  text-align: center;
}
.houseImage {
  text-align: right;
  width: 100%;
}

.houseImagePhone {
  margin: auto;
  padding-top: 2%;
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

.imageTextBox {
  margin-top: 2%;
  display: flex;
}

.leftColumnSpacing {
  padding-right: 15%;
  margin-left: 2%;
}

.contentWrapperSpacing {
  margin-left: 1.3%;
  margin-right: 11%;
  padding-top: 3vh;
}

.marginLeft {
  margin-left: 10%;
  padding-top: 6vh;
}
.secondPageFullScreen {
  margin-top: 10%;
  height: max(550px, 85vh);
}
</style>
