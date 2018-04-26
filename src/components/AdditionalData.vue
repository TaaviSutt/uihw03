<template>

</template>

<script>
  import {validationMixin} from 'vuelidate'
  import {
    email,
  } from 'vuelidate/lib/validators'

  export default {
    name: 'AdditionalData',
    props: ["mail_and_phone"],
    mixins: [validationMixin],
    data: () => ({

    }),
    methods: {
    }
  }
</script>

<style lang="scss" scoped>

</style>
