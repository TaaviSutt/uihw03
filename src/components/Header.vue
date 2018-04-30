<template>
  <md-toolbar class="md-primary" v-bind:class="{'md-large': (!minimizeHeader && activeHomeworkVersion !== -1)}">
    <div class="toolbar-wrapper" v-if="!minimizeHeader">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <md-menu md-size="medium" md-align-trigger md-close-on-select>
            <md-button md-menu-trigger>
              Start grading
              <md-icon>add_circle</md-icon>
            </md-button>

            <md-menu-content>
              <md-button disabled>Elukohast teatamise vorm</md-button>
              <md-menu-item @click="changeHomeworkVersion(2)" class="match-style">Bürokraatia</md-menu-item>
              <md-button disabled>Hindamisprotseduur</md-button>
            </md-menu-content>
          </md-menu>

          <h4 v-if="activeHomeworkVersion !== -1">Homework {{activeHomeworkVersion}}</h4>
        </div>

        <div class="md-toolbar-section-end">
          <md-button class="md-icon-button">
            <md-icon>refresh</md-icon>
          </md-button>

          <md-button class="md-icon-button">
            <md-icon>more_vert</md-icon>
          </md-button>
        </div>
      </div>

      <div class="md-toolbar-row md-toolbar-offset" v-if="activeHomeworkVersion !== -1">
        <div class="toolbar-additional">
          <md-field>
            <label>Student code (ie. ansalt)</label>
            <md-input v-model="userCode"/>
          </md-field>
          <md-button class="md-dense md-raised md-primary" @click="setUserCode(userCode)">Load</md-button>
        </div>
      </div>
    </div>
    <div class="toolbar-wrapper flex" v-if="minimizeHeader">
      <h3 class="md-title custom-title" style="flex: 1">{{userCode}} - Homework {{activeHomeworkVersion}}</h3>
      <md-button class="md-icon-button">
        <md-icon>settings</md-icon>
      </md-button>
    </div>

  </md-toolbar>
</template>

<script>

  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'Header',
    data: function () {
      return {
        userCode: ""
      }
    },
    methods: mapActions({
      changeHomeworkVersion (dispatch, id) {
        dispatch('setHomeworkVersion', id)
      },
      setUserCode (dispatch, name) {
        dispatch('setUserCode', name)
      }
    }),
    computed: mapGetters(
      ["activeHomeworkVersion", "minimizeHeader"]
    ),
  }
</script>

<style lang="scss" scoped>

  .toolbar-additional {
    background-color: #f3f3f3;
    padding: 10px;
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;

    .md-field {
      width: 350px;
    }
  }

  .md-toolbar-row:first-child {
    margin-left: 0px;
  }

  .md-toolbar-row {
    margin-left: 0px;
  }

  .toolbar-wrapper {
    width: 100%;

    &.flex {
      display: flex;
    }
  }

  .custom-title {
    align-self: center;
    text-align: start;
  }
</style>

