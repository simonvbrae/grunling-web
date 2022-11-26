<template>
  <div class="contentWrapper">
    <div class="contentColumn CC-55">
      <img class="grunlingImage" src="@/assets/images/grunling2.png" />
    </div>
    <div class="contentColumn CC-45">
      <div class="sloganBox" style="max-width: 65%">
        <p class="sectionTitle">INVEST WITH US</p>
        <p class="sectionContent" style="margin-top: -2%">
          <b><i>In Grunling or Flordi</i></b>
        </p>
        <p class="sectionContent">
          Change the world with your money. Align your heart, financial
          knowledge and savings and join in our investment.
        </p>

        <p class="sectionTitle" style="margin-top: 40%">INTERESTED?</p>
        <div class="imageTextBox">
          <img class="tomImage" src="@/assets/images/tom.png" />
          <div style="margin-left: 5%">
            <p class="sectionContent">
              Make an appointment with Tom Michels, co-founder and managing
              director.
            </p>
            <p class="sectionContent" style="margin-top: 8%">
              Tom@grunling.com
            </p>
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
  margin-top: 5%;
  margin-left: 7%;
  display: flex;
  justify-self: left;
  width: 90%;
  height: 100%;
}

.tomImage {
  border-style: solid;
  border-color: #fff8d4;
  border-width: 6px;

  display: flex;
  justify-self: left;

  margin-left: -1%;

  width: 45%;
  height: 45%;
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

.CC-55 {
  flex: 0.55;
  color: red;
}

.CC-45 {
  flex: 0.45;
  color: red;
}

.alignLeft {
  text-align: left;
}

.imageTextBox {
  margin-top: 2%;
  display: flex;
}
</style>
