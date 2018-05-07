<template>
  <div class="screen-view" style="opacity: 0;">
    <div class="controls">
      <md-button class="md-icon-button" @click="setScreenMode('DESKTOP')">
        <md-icon>computer</md-icon>
      </md-button>

      <md-button class="md-icon-button" @click="setScreenMode('PORTRAIT')">
        <md-icon>stay_current_portrait</md-icon>
      </md-button>

      <md-button class="md-icon-button" @click="setScreenMode('LANDSCAPE')">
        <md-icon>stay_current_landscape</md-icon>
      </md-button>

      <md-button @click="toggleScreenWidth()" class="md-icon-button">
        <md-icon>{{fullScreen ? 'fullscreen_exit' : 'fullscreen'}}</md-icon>
      </md-button>
    </div>

    <div class="screen" v-bind:class="{phone: this.screenMode === 'PORTRAIT', landscape: this.screenMode === 'LANDSCAPE'}">
      <div class="blocker" v-if="!loaded">
        <md-progress-bar md-mode="indeterminate"></md-progress-bar>

        <h3>Loading</h3>
      </div>
      <iframe v-if="minimizeHeader" @load="hideBlocker" class="iframe" :src="currentUserUrl" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from "vuex";
  import { TweenMax } from 'gsap';

  export default {
    name: 'Iframe',
    data: () => ({
      loaded: false
    }),
    watch: {
      minimizeHeader(value, oldValue) {
        if (value !== -1) {
          this.playAnimation();
        }
      }
    },
    mounted() {
      this.playAnimation();
    },
    computed: mapGetters(
      ["minimizeHeader", "currentUserUrl", "screenMode", "fullScreen"]
    ),
    methods: {
      playAnimation() {
        TweenMax.to(".screen-view", 1, {css: {opacity: "1"}})
      },
      hideBlocker() {
        this.loaded = true;
      },
      ...mapActions({
        setScreenMode (dispatch, screenMode) {
          dispatch('setScreenMode', screenMode)
        },
        toggleScreenWidth (dispatch) {
          dispatch("toggleScreenWidth")
        }
      }),
    }
  }
</script>

<style lang="scss" scoped>

  .screen-view {

    padding: 20px 40px 40px;
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 0;
    height: calc(100vh - 120px);

    @media only screen and (max-width: 768px) {
      padding: 0px;
      height: calc(100vh);
    }
  }

  .screen, .iframe {
    height: 100%;
    width: 100%;
  }

  .screen.phone {
    box-shadow: inset 0 4px 7px 1px #fff, inset 0 -5px 20px rgba(173,186,204,.25), 0 2px 6px rgba(0,21,64,.14), 0 10px 20px rgba(0,21,64,.05);
    border-radius: 38px;
    width: 449px;
    justify-self: center;
    align-self: center;
    overflow: hidden;
    max-height: 800px;

    .iframe {
      padding: 50px 10px;
    }
  }

  .screen.landscape {
    box-shadow: inset 0 4px 7px 1px #fff, inset 0 -5px 20px rgba(173,186,204,.25), 0 2px 6px rgba(0,21,64,.14), 0 10px 20px rgba(0,21,64,.05);
    border-radius: 38px;
    max-height: 400px;
    max-width: 800px;
    align-self: center;
    justify-self: center;

    .iframe {
      padding: 10px 38px;
    }
  }

  .screen {
    flex: 1;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    background: white;
    position: relative;
  }

  .blocker {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .controls {
    margin-bottom: 20px;

    @media only screen and (max-width: 768px) {
      display: none;
    }
  }

  .iframe {
    border: none;
  }

</style>

