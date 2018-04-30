<template>
  <div id="app">
    <Header></Header>
    <div class="md-layout md-gutter main-layout">
      <div class="md-layout-item">
        <Iframe></Iframe>
      </div>
      <div class="md-layout-item" v-if="!fullScreen">
        <Grading></Grading>
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
  import Header from './components/Header'
  import Grading from './components/Grading'
  import store from './store'
  import {mapGetters} from "vuex";

  import './scss/App.scss'

  Vue.use(VueMaterial);

  export default {
    name: 'App',
    store,
    components: {
      Header,
      Iframe,
      Grading
    },
    data: () => ({}),
    methods: {},
    computed: mapGetters(
      ["fullScreen"]
    ),
  }
</script>
