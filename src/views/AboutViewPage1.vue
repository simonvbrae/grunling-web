<template>
  <div class="contentWrapper" style="margin-left: 10%; padding-top: 6vh">
    <div class="contentColumn CC-1-Third">
      <img class="grunlingImage" src="@/assets/images/grunling.png" />
    </div>
    <div
      class="contentColumn CC-2-Thirds"
      style="padding-right: 5%; margin-left: 3%"
    >
      <div class="alignLeft">
        <div class="sectionContent">
          Founded in 2022 by 5 young investors, Grunling's mission is to make
          the world a better place. Just as you should teach people how to fish
          intead of giving them fish, we believe that the biggest impact can be
          made by teaching people how to build an impact-driven venture, instead
          of giving them a job.
        </div>
        <div>
          <div style="margin-top: 8%">
            <div class="sectionTitle">A HOUSE WITH IMPACT</div>
            <div class="sectionContent" style="display: flex; margin-top: 2%">
              <div class="contentColumn" style="padding-right: 10%">
                <p>
                  <strong>Connecting impact-driven entrepreneurs</strong> with
                  experienced business-people, turned out to be the best way to
                  strengthen them.
                </p>
              </div>
              <div class="contentColumn">
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
          <div class="sectionContent" style="display: flex; margin-top: 2%">
            <div class="contentColumn" style="padding-right: 10%">
              <p>
                <strong>Social entrepreneurs</strong>, co-operative start-ups
                and not-for-profit organizations with society-oriented goals fit
                in perfectly.
              </p>
            </div>

            <div class="contentColumn">
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
  computed: {},
  methods: {},
});
</script>

<style scoped>
.grunlingImage {
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
</style>
