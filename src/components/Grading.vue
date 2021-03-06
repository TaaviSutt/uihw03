<template>
  <div @mouseover="gradingAnimationStart" @mouseleave="gradingAnimationEnd" class="grading"
       style="transform: translateX(10000px)">
    <div class="grading-header">
      <div>
        <h2>
          Bürokraatia
        </h2>

        <div class="date">Kaitsmise kuupäev - {{new Date().toLocaleDateString()}}</div>
        <div class="grading-feedback">Hindamine</div>

        <div class="feedback-row first">
          <span>Baasülesanne - </span>
          <span>{{baseGrades}}/10</span>
        </div>

        <div class="feedback-row second">
          <span>Lisaülesanded - </span>
          <span>{{bonusPoints}}/10</span>
        </div>

        <div class="total">
          <span>Kokku - </span>
          <span>{{animatedTotalFixed}}/20 <md-icon class="icon-green" v-if="this.totalPoints().passed">check</md-icon><md-icon class="icon-red" v-if="!this.totalPoints().passed">error_outline</md-icon></span>
        </div>
      </div>
    </div>

    <div class="grading-points">

      <div class="md-layout md-gutter">
        <div class="md-layout-item md-small-size-100">
          <md-field>
            <label for="late">Hilinemine</label>
            <md-select v-model="lateValue" name="late" id="late">
              <md-option value="late1">Töö on esitatud õigeaegselt</md-option>
              <md-option value="late4">Pikendus kuni üks nädal</md-option>
              <md-option value="late2">Hilinemine kuni üks nädal (-2p)</md-option>
              <md-option value="late3">Hilinemine +1 nädal (-5p)</md-option>
            </md-select>
          </md-field>
        </div>

        <div class="md-layout-item md-small-size-100 center-content">
          <md-checkbox v-model="duplicateValue" class="md-primary warning">Plagiaat
            <md-icon>warning</md-icon>
          </md-checkbox>
        </div>
      </div>

      <md-field>
        <label>{{!duplicate ? "Kommentaarid" : "Kommentaarid ja plagiaadi info"}}</label>
        <md-textarea v-model.trim="commentValue" :required="duplicate"></md-textarea>
        <span class="md-error" v-if="duplicateValue && commentValue.length === 0">
          Kommentaari väli ei tohi olla tühi, kui on märgitud plagiaat
        </span>
      </md-field>

      <button @click="toggleAll(0)" class="title-parent">
        <div class="title-content">
          <div class="text">
            <h3 class="sub-title">
              Baasülesanne
            </h3>
            <div class="descriptive-text">
              10 punkti kui kõik ülesanded on lahendatud.
            </div>
          </div>
          <div class="select-all">
            <md-icon>done_all</md-icon>
          </div>
        </div>
      </button>

      <ExperimentalGrading :data-index="0">

      </ExperimentalGrading>

      <button @click="toggleAll(1)" class="title-parent">
        <div class="title-content">
          <div class="text">
            <h3 class="sub-title">
              Lisaülesanded
            </h3>
            <div class="descriptive-text">
              1 punkt iga ülesande eest.
            </div>
          </div>
          <div class="select-all">
            <md-icon>done_all</md-icon>
          </div>
        </div>
      </button>

      <ExperimentalGrading :data-index="1">
      </ExperimentalGrading>
    </div>

  </div>
</template>

<script>

  import {TweenMax} from 'gsap';
  import {mapGetters, mapActions} from "vuex";
  import ExperimentalGrading from "./ExperimentalGrading";

  export default {
    name: 'Grading',
    data: () => ({
      animatedTotal: 0,
      latePoints: 0,
      showDialog: false
    }),
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
      },
      bonusPoints(value, oldValue) {
        TweenMax.to(this.$data, 0.5, {animatedTotal: this.totalPoints().points});
      },
      baseGrades(value, oldValue) {
        TweenMax.to(this.$data, 0.5, {animatedTotal: this.totalPoints().points});
      },
      lateValue(value, oldValue) {
        TweenMax.to(this.$data, 0.5, {animatedTotal: this.totalPoints().points});
      },
      duplicateValues(value, oldValue) {
        TweenMax.to(this.$data, 0.5, {animatedTotal: this.totalPoints().points});
      }


    },
    computed: {
      ...mapGetters(
        ["minimizeHeader", "currentUserUrl", "fullScreen", "grading", "comments", "duplicate", "late", "totalPoints"],
      ),
      lateValue: {
        get() {
          return this.late;
        },
        set(value) {
          this.setLate(value);
          if (value === "late2") {
            this.latePoints = -2;
          }
          else if (value === "late3") {
            this.latePoints = -5;
          } else {
            this.latePoints = 0;
          }
        }
      },
      commentValue: {
        get() {
          return this.comments;
        },
        set(value) {
          this.updateComment(value);
        }
      },
      duplicateValue: {
        get() {
          return this.duplicate;
        },
        set(value) {
          this.updateDuplicate(value);
        }
      },
      baseGrades() {
        const count = this.grading[0].filter(item => item.selected === true).length;
        return count === this.grading[0].length ? 10 : count;
      },
      bonusPoints() {
        return this.grading[1].filter(item => item.selected === true).length;
      },
      lateValues() {
        return this.latePoints;
      },
      duplicateValues() {
        if (this.duplicateValue) {
          return (this.baseGrades + this.bonusPoints) * -1
        } else {
          return 0
        }
      },

      animatedTotalFixed: function () {
        return this.animatedTotal.toFixed(0);
      }
    },
    beforeMount() {
      if (this.fullScreen) {
        TweenMax.to(".grading", 0, {css: {transform: "translateX(" + window.innerWidth + "px)"}, ease: Power4.easeOut});
      }
    },
    mounted() {
      this.animatedTotal = this.totalPoints().points;

      if (!this.fullScreen && this.minimizeHeader) {
        this.playAnimation();
      }
    },

    methods: {
      ...mapActions(
        {
          toggleAll(dispatch, id) {
            dispatch('toggleAll', id)
          },
          updateComment(dispatch, value) {
            dispatch('updateComment', value)
          },
          updateDuplicate(dispatch, value) {
            dispatch('updateDuplicate', value)
          },
          setLate(dispatch, value) {
            dispatch('setLate', value)
          }
        },
      ),
      gradingAnimationStart: () => {
        TweenMax.to(".grading-header", 0.5, {css: {transform: "rotateY(0deg) rotateX(0deg) rotate(0deg)"}})
      },
      gradingAnimationEnd: () => {
        TweenMax.to(".grading-header", 0.5, {css: {transform: "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)"}})
      },
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
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
  }

  .stepOneDiv {
    overflow-y: auto;
    max-height: 50vh;
  }

  .stepTwoDiv {
    overflow-y: auto;
    max-height: 50vh;
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

  .grading-header {
    position: sticky;
    background-color: #24B47E;
    min-height: 150px;
    padding: 20px;
    top: 0;
    z-index: 100;
    margin-bottom: 20px;
    margin-left: -50px;
    width: 100%;
    border-radius: 12px;
    transform: scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg);
    box-shadow: 1px 1px 5px 0 rgba(26, 26, 67, 0.05), 39px 62.5px 125px -25px rgba(50, 50, 93, 0.5), 23.4px 37.5px 75px -37.5px;

    @media only screen and (max-width: 768px) {
      transform: none;
      margin-left: 0px;
    }

    h2 {
      color: white;
    }
  }

  .grading-points {
    margin: 0;
    padding: 25px;
  }

  .date {
    color: whitesmoke;
    font-size: 13px;
    font-weight: 400;
  }

  .grading-feedback {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 11px;
    color: white;
    border-bottom: 1px solid #e6ebf1;
    text-align: start;
  }

  .feedback-row {
    font-size: 16px;
    font-weight: 400;
    color: whitesmoke;;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: start;
    padding-top: 10px;
    padding-bottom: 10px;
    position: relative;

    &.second {
      padding-bottom: 25px;
      border-bottom: 2px solid #e6ebf1;
    }

    &.first:after {
      content: "";
      background-color: #f6f9fc;
      -webkit-transform-origin: center left;
      transform-origin: center left;
      height: 1px;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      opacity: 0.5;
    }

    span:first-child {
      flex: 1;
    }

    span:last-child {
      flex: 1;
      text-align: left;
      margin-left: 1em;
      font-size: 14px;
      font-weight: 600;
    }
  }

  .total {
    font-size: 16px;
    font-weight: 600;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: start;
    padding-top: 10px;
    padding-bottom: 10px;
    position: relative;
    text-transform: uppercase;

    span:first-child {
      flex: 1;
    }

    span:last-child {
      flex: 1;
      text-align: left;
      margin-left: 1em;
    }
  }

  .title-parent {
    margin-top: 35px;
    display: block;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    width: 100%;

    &:hover {
      opacity: 0.8;
    }

    &:first-child {
      margin-top: 15px;
    }
  }

  .title-content {
    display: flex;
    align-items: center;
  }

  .select-all {
    margin-left: 20px;

    i.md-icon {
      color: black;
    }
  }

  .center-content {
    align-self: center;

    > div {
      float: left;
    }
  }

  .warning, .warning i {
    color: red !important;
  }

  .md-error {
    color: red;
    opacity: 1;
    padding: 1%;
  }

  .icon-green {
    color: green !important;
    font-size: 29px !important;
  }

  .icon-red {
    color: red !important;
    font-size: 29px !important;
  }

</style>

