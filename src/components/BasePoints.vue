<template>
  <div class="md-layout">
    <div class="md-layout-item">
    <md-field>
      <label for="queue">Queue</label>
      <md-input name="queue" id="queue" v-model="queue"></md-input>
    </md-field>
    </div>

    <div class="md-layout-item">
      <md-field>
        <label for="sorting">Sorting</label>
        <md-input name="sorting" id="sorting" v-model="sorting"></md-input>
      </md-field>
    </div>

  </div>
</template>

<script>
  import 'vue-material/dist/vue-material.min.css'
  import 'vue-material/dist/theme/default.css'

  export default {
    name: "BasePoints",
    data: () => ({
      queue,
      sorting


    }),
  }
</script>
