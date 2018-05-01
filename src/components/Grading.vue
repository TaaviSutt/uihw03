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

    <md-steppers md-vertical>
      <md-step id="first" md-label="Base points">
        <div class="stepOneDiv">
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="queue">Queue</label>
                <md-input name="queue" id="queue" v-model="basePoints.queue"></md-input>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="sorting">Sorting</label>
                <md-input name="sorting" id="sorting" v-model="basePoints.sorting"></md-input>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="extra-task">Extra task</label>
                <md-input name="extraTask" id="extra-task" v-model="basePoints.extraTask"></md-input>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="lives">Lives</label>
                <md-input name="lives" id="lives" v-model="basePoints.lives"></md-input>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="game-end">Game Ending</label>
                <md-input name="gameEnd" id="game-end" v-model="basePoints.gameEnd"></md-input>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="score">Score</label>
                <md-input name="score" id="score" v-model="basePoints.score"></md-input>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="new-game">New game</label>
                <md-input name="newGame" id="new-game" v-model="basePoints.newGame"></md-input>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="animations">Animations</label>
                <md-input name="animations" id="animations" v-model="basePoints.animations"></md-input>
              </md-field>
            </div>
          </div>
        </div>
      </md-step>

      <md-step id="second" md-label="Bonus points">
        <div class="stepTwoDiv">
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="beautiful-layout">Beautiful Layout</label>
                <md-input name="beautifulLayout" id="beautiful-layout" v-model="bonusPoints.beautifulLayout"></md-input>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="layout-theme">Layout according to theme</label>
                <md-input name="layoutTheme" id="layout-theme" v-model="bonusPoints.layoutTheme"></md-input>
              </md-field>
            </div>
          </div>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="appearing">Good appearing</label>
                <md-input name="appearing" id="appearing" v-model="bonusPoints.appearing"></md-input>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="sorting-feedback">Good sorting feedback</label>
                <md-input name="sortingFeedback" id="sorting-feedback" v-model="bonusPoints.sortingFeedback"></md-input>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="extra-task-episode">Extra task is fits in the theme</label>
                <md-input name="extraTaskEpisode" id="extra-task-episode" v-model="bonusPoints.extraTaskEpisode"></md-input>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="fail-feedback">Good feedback when game over</label>
                <md-input name="failFeedback" id="fail-feedback" v-model="bonusPoints.failFeedback"></md-input>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="sounds">Sound feedback</label>
                <md-input name="sounds" id="sounds" v-model="bonusPoints.sounds"></md-input>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="learnable">Game is learnable</label>
                <md-input name="learnable" id="learnable" v-model="bonusPoints.learnable"></md-input>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="drag-and-drop">Sortable object can be dragged and dropped</label>
                <md-input name="dragAndDrop" id="drag-and-drop" v-model="bonusPoints.dragAndDrop"></md-input>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="mobile-phones">Works on mobile phones</label>
                <md-input name="mobilePhones" id="mobile-phones" v-model="bonusPoints.mobilePhones"></md-input>
              </md-field>
            </div>
          </div>
        </div>
      </md-step>

      <md-step id="third" md-label="Penalties">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
      </md-step>

      <md-step id="fourth" md-label="Total & Feedback">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
      </md-step>
    </md-steppers>
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
    data: () => ({
      basePoints: {
        queue :"",
        sorting: "",
        extraTask: "",
        lives: "",
        gameEnd: "",
        score: "",
        newGame: "",
        animations: ""
      },
      bonusPoints: {
        beautifulLayout: "",
        layoutTheme: "",
        appearing: "",
        sortingFeedBack: "",
        extraTaskEpisode: "",
        failFeedBack: "",
        sounds: "",
        learnable: "",
        dragAndDrop: "",
        mobilePhones:""
      }
    }),
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

</style>

