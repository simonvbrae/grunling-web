<template>
  <div class="viewBackgroundDiv">
    <div class="contentWrapper" :class="{ contentWrapperSmall: phone }">
      <div
        v-if="phone"
        class="contentColumn CC-45"
        :class="{ contentColumnSmall: phone }"
        style="text-align: center"
      >
        <div class="textAlignLeft">
          <p class="sectionTitle" :class="{ sectionMarginPhone: phone }">
            INVESTING IN THE FUTURE
          </p>
          <p class="sectionContent">
            Through the purchase of the property and accompanying land of the
            building, we own the soil where our cooperation will grow. The
            result of investing <strong>your energy</strong> and/or savings in
            our co-operation
            <strong
              >will still be visible when your (grand) children retire.</strong
            >
          </p>
        </div>
      </div>
      <div v-if="!phone" class="contentColumn CC-3">
        <div class="textAlignLeft" :class="{ spacingColumn1: !phone }">
          <p class="sectionTitle" :class="{ sectionMarginPhone: phone }">
            OUR SHARES
          </p>
          <p class="sectionContent"></p>
          <ul class="sectionContent li">
            <li>Shares are issued at €250</li>
            <li>Investing with Grunling is possible starting from €1000</li>
          </ul>

          <p
            class="sectionTitle"
            :class="{ sectinoMargin: !phone, sectionMarginPhone: phone }"
            style="margin-top: 30%"
          >
            YOUR ADVANTAGES
          </p>
          <ul class="sectionContent">
            <li>
              Tax benefits from 45% possible with tax-shelter via Flordi CV
              <ul>
                <li>every €1000, you gain €450 tax benefit</li>
              </ul>
            </li>
            <li>Envisioned yield of 2% on your shares</li>
            <li>Dividends possible up to 6%</li>
            <li>A vote on the General Meeting</li>
            <li>Contributing to a better world</li>
          </ul>
        </div>
      </div>
      <div v-if="!phone" class="contentColumn CC-3">
        <div style="width: 75%; margin-top: 30%; margin-left: 5%">
          <p
            class="sectionTitle"
            :class="{ sectionMarginPhone: phone }"
            style="line-height: 110%; font-family: 'DM Sans'"
          >
            <strong>INVESTING <br />IN THE FUTURE</strong>
          </p>
          <p class="sectionContent">
            Through the purchase of the property and accompanying land of the
            building, we own the soil where our cooperation will grow. <br />The
            result of investing <strong>your energy</strong> and/or savings in
            our co-operation
            <strong
              >will still be visible when your (grand) children retire.</strong
            >
          </p>
        </div>
      </div>
      <div class="contentColumn CC-4" :class="{ contentColumnSmall: phone }">
        <div
          :class="{ spacingInvestText: !phone }"
          class="textAlignLeft"
          style="margin-top: 5.5%"
        >
          <p class="sectionTitle">INVEST WITH US</p>
          <p class="sectionContent" style="margin-top: -2%">
            <b><i>In Grunling or Flordi</i></b>
          </p>
          <p class="sectionContent">
            Change the world with your money. Align your heart, economical
            intellect and savings and join in our investment.
          </p>
          <ul v-if="phone" class="sectionContent">
            <li>You contribute to the impact we make</li>
            <li>You will have zero responsibilities.</li>
            <li>Your liability will be limited to your investment.</li>
          </ul>

          <p
            class="sectionTitle sectionMargin"
            :class="{ sectionMargin: !phone, sectionMarginPhone: phone }"
          >
            INTERESTED?
          </p>
          <div class="imageTextBox" :class="{ 'flex-wrap': narrow }">
            <img
              v-if="!phone"
              class="tomImage"
              src="@/assets/images/tom.png"
              style="margin-right: 5%"
            />
            <div>
              <p class="sectionContent">
                Make an appointment with Tom Michels, co-founder and managing
                director.
              </p>
              <p class="sectionContent" style="margin-top: 8%">
                Tom@grunling.com
              </p>
            </div>
          </div>
          <div class="tomimagePhoneContainer">
            <img
              v-if="phone"
              class="tomImagePhone"
              src="@/assets/images/tom.png"
            />
          </div>
        </div>
      </div>
    </div>
    <div v-if="phone" :class="{ contentWrapperSmall: phone }">
      <div class="contentWrapper" :class="{ contentWrapperSmall: phone }">
        <div class="contentColumn CC-45" :class="{ contentColumnSmall: phone }">
          <div class="textAlignLeft">
            <p class="sectionTitle" :class="{ sectionMarginPhone: phone }">
              OUR SHARES
            </p>
            <p class="sectionContent" style="margin-top: -2%"></p>
            <ul class="sectionContent">
              <li>Shares are issued at €250</li>
              <li>Investing with Grunling is possible starting from €1000</li>
            </ul>

            <p class="sectionTitle" :class="{ sectionMarginPhone: phone }">
              YOUR ADVANTAGES
            </p>
            <ul class="sectionContent">
              <li>
                Tax benefits from 45% possible with tax-shelter via Flordi CV
                <ul>
                  <li>every €1000, you gain €450 tax benefit</li>
                </ul>
              </li>
              <li>Envisioned yield of 2% on your shares</li>
              <li>Dividends possible up to 6%</li>
              <li>A vote on the General Meeting</li>
              <li>Contributing to a better world</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "InvestView",
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
    narrow() {
      return this.$data.windowWidth < 1080;
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
.leftColumnSpacing {
  padding-right: 0%;
  margin-left: 5%;
}
.grunlingImage {
  margin-top: 5%;
  margin-left: 7%;
  display: flex;
  justify-self: left;
  width: 90%;
  height: 100%;
}
.grunlingImagePhone {
  display: flex;
  margin: auto;
  width: 95%;
  height: 100%;
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

.CC-55 {
  flex: 0.55;
}

.CC-45 {
  flex: 0.45;
}

.CC-3 {
  flex: 0.3;
}
.CC-4 {
  flex: 0.4;
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
  margin-left: 4.5%;
  margin-top: 5.5%;
}
.spacingColumn1 {
  max-width: 82%;
  margin-left: 15%;
  margin-top: 10%;
}
.secondPageFullScreen {
  margin-top: 10%;
  height: max(550px, 85vh);
}
li {
  margin-top: 10px;
}
</style>
