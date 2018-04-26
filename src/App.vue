<template>
  <div id="app">
    <Stepper class="form-screen" v-on:complete="complete" v-if="!formComplete"/>
    <SuccessScreen ref="success"/>
  </div>
</template>
<script>

import Vue from 'vue'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueMaterial from 'vue-material'
import Stepper from './components/Stepper'
import SuccessScreen from './components/SuccessScreen'

import './scss/App.scss'

Vue.use(VueMaterial);
export default {
  name: 'App',
  components: {
    Stepper,
    SuccessScreen
  },
  data: () => ({
    formComplete: false
  }),
  methods: {
    complete() {
      this.formComplete = true;
      this.$refs.success.initializeEffect();
    }
  }
}
</script>
