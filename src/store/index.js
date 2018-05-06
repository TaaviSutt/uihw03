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

const baseTemplate = {
  students: [],
  author: "",
  homeworkVersion: -1,
  late: "late1",
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
  ],
  duplicate: false,
  comments: ""
};
export const BASE_TEMPLATE = baseTemplate;
const state = {
  activeSheet: {
    ...baseTemplate,
    grading : [
      BASE_TEMPLATE.grading[0].map((item) => {
        return {...item, selected: false};
      }),
      BASE_TEMPLATE.grading[1].map((item) => {
        return {...item, selected: false};
      })
    ]
  },
  completedSheets: [
    {
      students: ["Andreas Saltsberg", "Taavi Sutt"],
      author: "ansalt",
      homeworkVersion: 2,
      late: "late2",
      grading: [
        [
          {title: "Ootejärjekord", description: "Peab nägema ootejärjekorda", selected: true},
          {title: "Sortimine", description: "Lohistamine või klõps", selected: true},
          {title: "Tähtajaline lisaülesanne", description: "Aeg-ajalt antakse mängijale lihtne lisaülesanne", selected: true},
          {title: "Elude kaotamine", description: "Kui elud on otsas antakse mängijale mõista et mäng sai läbi", selected: true},
          {title: "Mängu läbikukkumine", description: "Näidatakse punkte ja võimaldatakse mängu korrata.", selected: true},
          {title: "Animatsioonid", description: "Kasutaja tähelepanu juhitakse animatsioonidega", selected: true},
        ],
        [
          {title: "Ilus kujundus", description: "Kujundus vastab nõuetele", selected: true},
          {title: "Kujundus vastavalt teemale", description: "Mängu kujundus toetab teemat", selected: true},
          {title: "Head ilmumised", description: "Ekraanile ilmumised on loogilised", selected: true},
          {title: "Sortimise tagasiside", description: "Hea sortimise tagasiside", selected: true},
          {title: "Episood", description: "Hea lisaülesande \"episood\"", selected: true},
          {title: "Läbikukkumise tagasiside", description: "Hea läbikukkumiste tagasiside", selected: true},
          {title: "Heliline tagasiside", description: "Mängu toetab ka heliline tagasiside", selected: true},
          {title: "Õpetatavus", description: "Mängu õpitavus on hea", selected: true},
          {title: "Lohistamine", description: "Sorditavaid objekte saab lohistada (drag&drop)", selected: true},
          {title: "Mobiil", description: "Töötab ka mobiilil", selected: false}
        ],
      ],
      duplicate: false,
      comments: "Hästi tehtud töö :)"
    }
  ],
  minimizeHeader: false,
  screenMode: DESKTOP,
  fullScreen: false,
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  plugins: [createLogger()]
})
