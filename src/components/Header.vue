<template>
  <md-toolbar class="md-primary" v-bind:class="{'md-large': (!minimizeHeader && activeHomeworkVersion !== -1)}">
    <div class="toolbar-wrapper" v-if="!minimizeHeader">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <md-menu md-size="medium" md-align-trigger md-close-on-select>
            <md-button md-menu-trigger>
              Alusta hindamist
              <md-icon>add_circle</md-icon>
            </md-button>

            <md-menu-content>
              <md-button disabled>Elukohast teatamise vorm</md-button>
              <md-menu-item @click="changeHomeworkVersion(2)" class="match-style">Bürokraatia</md-menu-item>
              <md-button disabled>Hindamisprotseduur</md-button>
            </md-menu-content>
          </md-menu>

          <h4 v-if="activeHomeworkVersion !== -1">Kodutöö - {{activeHomeworkVersion}} Bürokraatia</h4>
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
          <div>
            <md-chips class="md-primary pulse-on-error" v-model="selectedStudents" md-placeholder="Lisa tudeng"
                      :md-limit="2" @md-click="addStudent" md-check-duplicated></md-chips>
          </div>
          <span v-bind:class="{active: selectedStudents.length > 0}" class="helper"><md-icon>keyboard_arrow_left</md-icon> valige kodutöö esitaja</span>

        </div>
      </div>
    </div>

    <div class="toolbar-wrapper flex" v-if="minimizeHeader">
      <h3 class="md-title custom-title" style="flex: 1">Kodutöö {{activeHomeworkVersion}} - Bürokraatia</h3>
      <div class="center-btn">
        <md-chip class="md-primary" v-for="chip in selectedStudents" :key="chip">{{ chip }}</md-chip>
      </div>
      <md-button v-on:click="goBack()" >Tühista</md-button>
      <md-button>Salvesta</md-button>
      <md-button class="md-icon-button center-btn">
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
        userCode: "",
        allStudents: [
          {name: "Andreas Saltsberg", uniId: "ansalt"},
          {name: "Taavi Sutt", uniId: "Taavi.Sutt"},
          {name: "Madis Mets", uniId: "MaMets"}
        ],
        students: [
          "Andreas Saltsberg (ansalt)",
          "Taavi Sutt (Taavi.Sutt)",
          "Hendrig Sellik (Hendrig.Sellik)",
        ],
        selectedStudents: [],
        activeStudent: null,
      }
    },
    methods: {
      ...mapActions({
          changeHomeworkVersion(dispatch, id) {
            dispatch('setHomeworkVersion', id)
          },
          setUserCode(dispatch, name) {
            dispatch('setUserCode', name);
          },
          showStart(dispatch, value) {
            dispatch("showStart", value)
          }
        },
      ),
      goBack: function() {
        this.selectedStudents = [];
        this.showStart(false);
      },
      addStudent: function (event) {
        const studentsByName = this.allStudents.filter(item => item.name === event);
        const studentsByCode = this.allStudents.filter(item => item.uniId === event);

        if (studentsByName.length !== 0) {
          this.setUserCode(studentsByName[0].uniId);
        } else if (studentsByCode.length !== 0) {
          this.setUserCode(studentsByCode[0].uniId);
        } else {
          this.setUserCode(event);
        }
      },

    },
    computed: mapGetters(
      ["activeHomeworkVersion", "minimizeHeader"]
    ),
  }
</script>

<style lang="scss" scoped>

  .toolbar-additional {
    padding: 0px 10px;
    width: 550px;
    display: flex;
    height: 40px;
    justify-content: center;
    align-items: center;

    .md-field {
      width: 350px;
    }

    input::-webkit-input-placeholder { /* Chrome/Opera/Safari */
      color: white !important;
    }

    .md-input {
      color: white !important;
      -webkit-text-fill-color: white !important;
    }

    input::-moz-placeholder { /* Firefox 19+ */
      color: white !important;
    }
    input:-ms-input-placeholder { /* IE 10+ */
      color: white !important;
    }
    input:-moz-placeholder { /* Firefox 18- */
      color: white !important;
    }

    input::placeholder {
      color: white !important;
    }

    ::placeholder {
      color: white !important;
    }

    .md-field.md-theme-default:after {
      background-color: white;
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

  .center-btn {
    align-self: center;
  }

  .helper {
    opacity: (0);
    transition: all 0.5s ease-in;
    color: white;
    text-transform: UPPERCASE;
    font-size: 12px;

    > * {
      color: white !important;
    }

    &.active {
      opacity: (1);
    }
  }

  .md-field.md-theme-default.md-has-value .md-input {
    color: white !important;
    -webkit-text-fill-color: white !important;
  }
</style>

