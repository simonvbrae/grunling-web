<template>
  <div
    :class="{
      contentWrapper: !phone,
      marginLeft: !phone,
      contentWrapperSmall: phone,
    }"
    style="padding-top: 6vh"
  >
    <div
      class="contentColumn CC-1-Third"
      :class="{ contentColumnSmall: phone }"
    >
      <img class="grunlingImage" src="@/assets/images/grunling.png" />
    </div>
    <div
      class="contentColumn CC-2-Thirds"
      :class="{
        spacingRight: !phone,
        contentColumnSmall: phone,
        bottomSectionSmall: phone,
      }"
    >
      <div class="alignLeft">
        <div class="sectionContent" :class="{ centerText: phone }">
          Founded in 2022 by 5 young investors, Grunling's mission is to make
          the world a better place. Just as you should teach people how to fish
          intead of giving them fish, we believe that the biggest impact can be
          made by teaching people how to build an impact-driven venture, instead
          of giving them a job.
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
                  experienced business-people, turned out to be the best way to
                  strengthen them.
                </p>
              </div>
              <div
                :class="{ contentColumn: !phone, contentColumnSmall: phone }"
              >
                <p>
                  <strong>Offices, co-working and commercial spaces</strong> are
                  all at your disposal on Grunling's 450m² premises.
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
                and not-for-profit organizations with society-oriented goals fit
                in perfectly.
              </p>
            </div>

            <div :class="{ contentColumn: !phone, contentColumnSmall: phone }">
              <p>
                <strong>Democratic control</strong> is implemented by the
                co-operants in Grunling's solid bylaws to safeguard the ethical
                objectives of the cooperation.
              </p>
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
.grunlingImage {
  margin: auto;
  width: 90%;
  height: 90%;
}

.CC-1-Third {
  flex: 1;
  color: red;
}

.CC-2-Thirds {
  flex: 2;
}

.alignLeft {
  text-align: left;
}
.spacingLeft {
  margin-left: 10%;
}
.spacingRight {
  padding-right: 5%;
  margin-left: 3%;
}

.bottomSectionSmall {
  margin-top: 10%;
  text-align: center;
}
</style>
