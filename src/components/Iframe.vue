<template>
  <div class="screen-view">


    <div class="controls">
      <md-button class="md-icon-button">
        <md-icon>computer</md-icon>
      </md-button>

      <md-button class="md-icon-button">
        <md-icon>stay_current_portrait</md-icon>
      </md-button>

      <md-button class="md-icon-button">
        <md-icon>stay_current_landscape</md-icon>
      </md-button>

      <md-button class="md-icon-button">
        <md-icon>fullscreen</md-icon>
      </md-button>
    </div>

    <div class="screen">
      <iframe v-if="minimizeHeader" class="iframe" :src="currentUserUrl" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";

  export default {
    name: 'Iframe',
    data: () => ({
      urlAddress: '',
    }),
    computed: mapGetters(
      ["minimizeHeader", "currentUserUrl"]
    ),
    methods: {}
  }
</script>

<style lang="scss" scoped>

  .screen-view {
    height: 100%;
    padding: 20px 40px 40px;
    display: flex;
    flex-direction: column;
  }

  .screen, .iframe {
    height: 100%;
    width: 100%;
  }

  .screen {
    flex: 1;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    background: white;
  }

  .controls {
    margin-bottom: 20px;
  }

  .iframe {
    border: none;
  }

</style>

