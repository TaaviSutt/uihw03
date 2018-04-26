<template>

</template>

<script>
  import {validationMixin} from 'vuelidate'
  import {
    required,

  } from 'vuelidate/lib/validators'

  import VueGoogleAutocomplete from 'vue-google-autocomplete'
  import CustomAutoComplete from "./CustomAutoComplete"

  export default {
    name: 'StepThree',
    mixins: [validationMixin],
    data: () => ({

    }),


    methods: {
    },

  }
</script>

<style lang="scss" scoped>

</style>
