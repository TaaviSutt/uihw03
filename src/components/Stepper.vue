<template>
    <md-steppers class="background" md-vertical md-linear :md-active-step.sync="active">
      <h1 class="title">ELUKOHATEADE</h1>
      <md-step id="first" md-label="Üldandmed" :md-description="first ? 'Klõpsi siia, et muuta' : ''" :md-editable="true" :md-done.sync="first" :md-error="firstError">
        <step-one-container v-on:complete="setDone('first', 'second')"  v-on:error="setError"></step-one-container>
      </md-step>

      <md-step id="second" md-label="Aadressid" :md-description="second ? 'Klõpsi siia, et muuta' : ''" :md-editable="true" :md-done.sync="second" :md-error="secondError">
        <step-two-container v-on:others="setData" v-on:complete="setDone('second', 'third')" v-on:error="setError"></step-two-container>
      </md-step>

      <md-step id="third" md-label="Õigused" :md-description="third ? 'Klõpsi siia, et muuta' : ''" :md-editable="true" :md-done.sync="third" :md-error="thirdError">
        <step-three-container v-on:complete="setDone('third', 'fourth')" v-on:error="setError"></step-three-container>
      </md-step>

      <md-step id="fourth" md-label="Täiendavad andmed" :md-editable="false" :md-done.sync="fourth" :md-error="fourthError">
        <step-four-container :data_about_others="this.dataAboutOthers" v-on:complete="setDone('fourth', 'fourth')" v-on:error="setError"></step-four-container>
      </md-step>
    </md-steppers>
</template>

<script>

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
export default {
  name: 'Stepper',
  data: () => ({
    first: false,
    firstError: null,
    second: false,
    secondError: null,
    third: false,
    thirdError: null,
    fourth: false,
    fourthError: null,
    active: "first",
    dataAboutOthers: false
  }),
  mounted(){
    console.log(this);
  },
  methods: {
    setDone (id, index) {
      this[id] = true;
      this[id + "Error"] = null;
      if (index) {
        this.active = index
      }
      if (id === "fourth") {
        this.$emit('complete');
      }
    },
    setError(step, error) {
      this[step + "Error"] = error;
    },
    setData(id, data) {
      this[id] = data;
    }
  },
  components: {
    'step-one-container': StepOne,
    'step-two-container': StepTwo,
    'step-three-container': StepThree,
    'step-four-container': StepFour
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.title {
  position: relative;
  line-height: 0.9;
  margin-bottom: 0px;
  margin-left: 25px;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    text-align: center;
  }
}

</style>
