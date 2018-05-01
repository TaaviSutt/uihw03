<template>
  <div class="grading" style="transform: translateX(10000px)">

    <h2>
      Bürokraatia
    </h2>

    <h3 class="sub-title">
      Baasülesanne
    </h3>
    <div class="descriptive-text">
      10 punkti kui kõik ülesanded on lahendatud.
    </div>

    <ExperimentalGrading :data-index="0">

    </ExperimentalGrading>

    <h3 class="sub-title">
      Lisaks
    </h3>
    <div class="descriptive-text">
      1 punkt iga ülesande eest.
    </div>

    <ExperimentalGrading :data-index="1">

    </ExperimentalGrading>
  </div>
</template>

<script>

  import {TweenMax} from 'gsap';
  import {mapGetters} from "vuex";
  import ExperimentalGrading from "./ExperimentalGrading";

  export default {
    name: 'Grading',
    data: () => ({}),
    components: {
      ExperimentalGrading
    },
    watch: {
      minimizeHeader(value, oldValue) {
        if (value !== -1) {
          this.playAnimation();
        }
      },
      fullScreen(value, oldValue) {
        if (value !== true) {
          this.playAnimation();
        }
      }
    },
    computed: mapGetters(
      ["minimizeHeader", "currentUserUrl", "fullScreen"]
    ),
    beforeMount() {
      if (this.fullScreen) {
        TweenMax.to(".grading", 0, {css: {transform: "translateX(" + window.innerWidth + "px)"}, ease: Power4.easeOut});
      }
    },
    mounted() {
      if (!this.fullScreen && this.minimizeHeader) {
        this.playAnimation();
      }
    },
    methods: {
      playAnimation: () => {
        TweenMax.to(".grading", 0, {css: {transform: "translateX(" + window.innerWidth + "px)"}, ease: Power4.easeOut});

        TweenMax.to(".grading", 1, {css: {transform: "translateX(0px)"}})
      }
    }
  }
</script>

<style lang="scss" scoped>

  .grading {
    background: white;
    padding: 25px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  .sub-title {
    text-align: start;
    margin: 0;
  }

  .descriptive-text {
    color: #525f7f;
    font-weight: 400;
    margin-bottom: 5px;
    text-align: start;
  }

  .sub-title:not(:first-child) {
    margin-top: 25px;
  }

</style>

