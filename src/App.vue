<template>
  <div id="app">
    <div class="md-layout md-gutter">
      <div class="md-layout-item">
        <Iframe></Iframe>
      </div>
      <div class="md-layout-item">
        <h2>bla bla</h2>
      </div>
    </div>

  </div>
</template>
<script>

  import Vue from 'vue'
  import 'vue-material/dist/vue-material.min.css'
  import 'vue-material/dist/theme/default.css'
  import VueMaterial from 'vue-material'
  import Iframe from './components/Iframe'

  import './scss/App.scss'

  Vue.use(VueMaterial);
  export default {
    name: 'App',
    components: {
      Iframe

    },
    data: () => ({}),
    methods: {}
  }
</script>
