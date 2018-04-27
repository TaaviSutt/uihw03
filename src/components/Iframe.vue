<template>
  <div>
    <div>
      <md-field>
        <label>Url aadress</label>
        <md-input name="url-address" id="url-address" v-model.trim="urlAddress"/>
      </md-field>
    </div>
    <div class="scalable scalable-16-9">
      <div class="scalable-content">
        <iframe :src="urlAddress" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Iframe',
    data: () => ({
      urlAddress: '',
    }),
    methods: {}
  }
</script>

<style lang="scss" scoped>

  .scalable {
    overflow: hidden;
  }

  .scalable iframe {
    height: 75%;
    left: 0;
    position: absolute;
    top: 0;
    width: 50%;
  }

  .scalable .scalable-content {
    height: 0;
    position: relative;
  }

  .scalable-16-9 .scalable-content {
    /* Percentage from 9 divided by 16 for ratio of 16:9. */
    padding-bottom: 56.25%;
  }

</style>
