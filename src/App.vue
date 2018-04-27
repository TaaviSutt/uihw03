<template>
  <div id="app">
    <Iframe></Iframe>
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
