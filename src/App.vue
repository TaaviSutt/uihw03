<template>
  <div id="app">
    <Header></Header>
    <div class="md-layout md-gutter main-layout" v-if="minimizeHeader">
      <div class="md-layout-item">
        <Iframe></Iframe>
      </div>
      <div class="md-layout-item" v-if="!fullScreen">
        <Grading></Grading>
      </div>
    </div>

    <div class="table-wrapper" v-if="!minimizeHeader">
      <md-table v-model="completedSheets" md-card>
        <md-table-toolbar>
          <h1 class="md-title">Kaitstud tööd</h1>
        </md-table-toolbar>

        <md-table-row slot="md-table-row" slot-scope="{ item }">
          <md-table-cell md-label="Versioon" md-sort-by="homeworkVersion">Kodutöö {{ item.homeworkVersion }} - Bürokraatia</md-table-cell>
          <md-table-cell md-label="Korras" md-sort-by="good">{{ item.late === "late4" ? "Pikendatud" : totalPoints(item).passed ? "Jah" : "Ei" }}</md-table-cell>
          <md-table-cell md-label="Esitajad" md-sort-by="students">
            <span v-for="(element, index) in item.students" class="item">
              <span>{{ element }}{{index + 1 !== item.students.length ? ", " : ""}}</span>
            </span>
          </md-table-cell>
          <md-table-cell md-label="Punktid" md-sort-by="grading">{{totalPoints(item).points}} <md-icon v-if="!totalPoints(item).passed">error</md-icon></md-table-cell>
          <md-table-cell md-label="Kommentaarid" md-sort-by="comments">{{ item.comments }}</md-table-cell>
          <md-table-cell md-label="Hilinemised" md-sort-by="comments">{{ item.late === "late4" ? "Üks nädal pikendust" : item.late === "late3" ? "Hilinemine +1 nädal" : item.late === "late2" ? "Hilinemine kuni 1 nädal" : "Korras"}}</md-table-cell>
          <md-table-cell md-label="Plagiaat" md-sort-by="comments">{{ item.duplicate ? "Jah" : "Ei" }}</md-table-cell>
          <md-table-cell md-label=""><md-button class="md-primary" @click="showSheet(item)">vaata</md-button></md-table-cell>
        </md-table-row>
      </md-table>
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
  import BasePoints from './components/BasePoints'
  import store from './store'
  import {mapGetters, mapActions} from "vuex";

  import './scss/App.scss'

  Vue.use(VueMaterial);

  export default {
    name: 'App',
    store,
    components: {
      Header,
      Iframe,
      Grading,
      BasePoints
    },
    data: () => ({}),
    methods: {
      ...mapActions({
        showSheet(dispatch, sheet) {
            dispatch('showSheet', sheet);
          }
        },
      ),
      calculatePoints(grading) {
        let firstPart = grading[0].filter(item => item.selected).length;

        if (firstPart === grading[0].length) {
          firstPart = 10;
        }

        return firstPart  + grading[1].filter(item => item.selected).length
      },
    },
    computed: mapGetters(
      ["fullScreen", "minimizeHeader", "completedSheets", "totalPoints"]
    ),
  }
</script>

<style lang="scss" scoped>

  .table-wrapper {
    max-width: 1200px;
    margin: 50px auto 0;
    > div {
      padding: 20px;
    }

    @media only screen and (max-width: 768px) {
      width: 100%;
    }
  }

</style>

