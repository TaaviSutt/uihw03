<template>
  <div class="grading" style="transform: translateX(10000px)">
    <md-steppers md-vertical>
      <md-step id="first" md-label="Base points">
        {{fullScreen}}
        <md-button @click="playAnimation">Click me</md-button>
        <div>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="queue">Queue</label>
                <md-input name="queue" id="queue" v-model="queue"></md-input>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="sorting">Sorting</label>
                <md-input name="sorting" id="sorting" v-model="sorting"></md-input>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="extra-task">Extra task</label>
                <md-input name="extraTask" id="extra-task" v-model="extraTask"></md-input>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="lives">Lives</label>
                <md-input name="lives" id="lives" v-model="lives"></md-input>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="game-end">Game Ending</label>
                <md-input name="gameEnd" id="game-end" v-model="gameEnd"></md-input>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="score">Score</label>
                <md-input name="score" id="score" v-model="score"></md-input>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="new-game">New game</label>
                <md-input name="newGame" id="new-game" v-model="newGame"></md-input>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="animations">Animations</label>
                <md-input name="animations" id="animations" v-model="animations"></md-input>
              </md-field>
            </div>
          </div>
        </div>
      </md-step>

      <md-step id="second" md-label="Bonus points">
        <div>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="beautiful-layout">Beautiful Layout</label>
                <md-input name="beautifulLayout" id="beautiful-layout" v-model="beautifulLayout"></md-input>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="layout-theme">Layout according to theme</label>
                <md-input name="layoutTheme" id="layout-theme" v-model="layoutTheme"></md-input>
              </md-field>
            </div>
          </div>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="appearing">Good appearing</label>
                <md-input name="appearing" id="appearing" v-model="appearing"></md-input>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="sorting-feedback">Good sorting feedback</label>
                <md-input name="sortingFeedback" id="sorting-feedback" v-model="sortingFeedback"></md-input>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="extra-task-episode">Extra task is fits in the theme</label>
                <md-input name="extraTaskEpisode" id="extra-task-episode" v-model="extraTaskEpisode"></md-input>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="fail-feedback">Good feedback when game over</label>
                <md-input name="failFeedback" id="fail-feedback" v-model="failFeedback"></md-input>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="sounds">Sound feedback</label>
                <md-input name="sounds" id="sounds" v-model="sounds"></md-input>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="learnable">Game is learnable</label>
                <md-input name="learnable" id="learnable" v-model="learnable"></md-input>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="drag-and-drop">Sortable object can be dragged and dropped</label>
                <md-input name="dragAndDrop" id="drag-and-drop" v-model="dragAndDrop"></md-input>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="mobile-phones">Works on mobile phones</label>
                <md-input name="mobilePhones" id="mobile-phones" v-model="mobilePhones"></md-input>
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

  export default {
    name: 'Grading',
    data: () => ({}),
    watch: {
      minimizeHeader(value, oldValue) {
        if (value !== -1) {
          this.playAnimation();
        }
      },
      fullScreen(value, oldValue) {
        console.log(value);
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
    padding: 10px;
    height: 100%;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

</style>

