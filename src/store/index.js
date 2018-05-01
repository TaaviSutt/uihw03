import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const DESKTOP = "DESKTOP";
export const PHONE_LANDSCAPE = "LANDSCAPE";
export const PHONE_PORTRAIT = "PORTRAIT";

const state = {
  studentName: "",
  homeworkVersion: -1,
  minimizeHeader: false,
  screenMode: DESKTOP,
  fullScreen: false,
  grading: [
    [
      {title: "Ootejärjekord", description: "Peab nägema ootejärjekorda", selected: false},
      {title: "Sortimine", description: "Lohistamine või klõps", selected: false},
      {title: "Tähtajaline lisaülesanne", description: "Aeg-ajalt antakse mängijale lihtne lisaülesanne", selected: false},
      {title: "Elude kaotamine", description: "Kui elud on otsas antakse mängijale mõista et mäng sai läbi", selected: false},
      {title: "Mängu läbikukkumine", description: "Näidatakse punkte ja võimaldatakse mängu korrata.", selected: false},
      {title: "Animatsioonid", description: "Kasutaja tähelepanu juhitakse animatsioonidega", selected: false},
    ],
    [
      {title: "Ilus kujundus", description: "Kujundus vastab nõuetele", selected: false},
      {title: "Kujundus vastavalt teemale", description: "Mängu kujundus toetab teemat", selected: false},
      {title: "Head ilmumised", description: "Ekraanile ilmumised on loogilised", selected: false},
      {title: "Sortimise tagasiside", description: "Hea sortimise tagasiside", selected: false},
      {title: "Episood", description: "Hea lisaülesande \"episood\"", selected: false},
      {title: "Läbikukkumise tagasiside", description: "Hea läbikukkumiste tagasiside", selected: false},
      {title: "Heliline tagasiside", description: "Mängu toetab ka heliline tagasiside", selected: false},
      {title: "Õpetatavus", description: "Mängu õpitavus on hea", selected: false},
      {title: "Lohistamine", description: "Sorditavaid objekte saab lohistada (drag&drop)", selected: false},
      {title: "Mobiil", description: "Töötab ka mobiilil", selected: false}
    ],
  ]
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  plugins: [createLogger()]
})
