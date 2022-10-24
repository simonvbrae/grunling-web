<template>
  <div class="parent" :style="backgroundImage">
    <div class="contentDiv">
      <br />

      <v-btn
        v-if="language == 'dutch'"
        @click="setLanguageEnglish"
        class="text-center"
        rounded
        color="primary"
        style="text-decoration: none; color: black"
      >
        view english version
      </v-btn>
      <v-btn
        v-else
        @click="setLanguageDutch"
        class="text-center"
        rounded
        color="primary"
        style="text-decoration: none; color: black"
      >
        bekijk nederlandse versie
      </v-btn>

      <br />
      <br />

      <img
        v-if="language == 'dutch'"
        class="image"
        src="@/assets/images/1.png"
      />
      <img v-else class="image" src="@/assets/images/1-english-new.png" />
      <br />
      <br />
      <br />
      <img
        v-if="language == 'dutch'"
        class="image"
        src="@/assets/images/2.png"
      />
      <img v-else class="image" src="@/assets/images/2-english-new.png" />
      <br v-if="language == 'dutch'" />
      <br v-if="language == 'dutch'" />
      <br v-if="language == 'dutch'" />
      <img
        v-if="language == 'dutch'"
        class="image"
        src="@/assets/images/3.png"
      />
      <br />
    </div>

    <v-container
      fluid
      class="flex-nowrap"
      justify="center"
      style="margin-top: 0"
    >
      <v-row no-gutters style="padding-top: 10px">
        <v-col cols="12">
          <a
            href="https://statuten.notaris.be/stapor_v1/enterprise/0782714675"
            style="text-decoration: none"
          >
            <v-btn
              class="text-center"
              rounded
              color="primary"
              style="text-decoration: none; color: black"
            >
              Statuten
            </v-btn>
          </a>
        </v-col>
      </v-row>
      <v-row no-gutters style="padding-top: 10px">
        <v-col cols="12">
          <a href="https://www.flordi.be" style="text-decoration: none">
            <v-btn
              class="text-center"
              rounded
              color="primary"
              style="text-decoration: none; color: black"
            >
              Flordi
            </v-btn>
          </a>
        </v-col>
      </v-row>
      <v-row no-gutters style="padding-top: 10px">
        <v-col cols="12">
          <a href="mailto:info@grunling.com" style="text-decoration: none">
            <v-btn
              class="text-center"
              rounded
              color="primary"
              style="text-decoration: none; color: black"
            >
              Mail
            </v-btn>
          </a>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "GrunlingMainView",
  components: {},
  data() {
    return {
      language: "english",
      hideSplashImage: false,
      menuHasBackground: true,
    };
  },
  computed: {
    backgroundImage() {
      return {
        background: "rgba(220, 220, 220, 1)",
        webkitBackgroundSize: "cover",
        mozBackgroundSize: "cover",
        oBackgroundSize: "cover",
        backgroundSize: "cover",
      };
    },
  },
  methods: {
    setLanguageDutch() {
      this.$data.language = "dutch";
    },
    setLanguageEnglish() {
      this.$data.language = "english";
    },
  },
  mounted() {
    this.$data.windowHeight = window.innerHeight;

    window.onscroll = (e) => {
      if (
        document.body.scrollTop > this.$data.windowHeight ||
        document.documentElement.scrollTop > this.$data.windowHeight
      ) {
        this.$data.hideSplashImage = true;
      }
    };
    window.addEventListener("resize", () => {
      this.$data.windowHeight = window.innerHeight;
    });
  },
});
</script>

<style scoped>
.image {
  max-width: 80vw;
}
.brochure_image {
  max-width: 80vw;
}
</style>
