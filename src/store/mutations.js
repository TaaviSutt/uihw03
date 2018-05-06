import {BASE_TEMPLATE} from "./index"

export default {
  homeworkVersion(state, id) {
    state.activeSheet.homeworkVersion = id;
  },
  studentName(state, author) {
    state.activeSheet.author = author;

    if (state.activeSheet.homeworkVersion !== -1 && author.trim().length > 0) {
      state.minimizeHeader = true;
    }
  },
  screenMode(state, newScreenMode) {
    state.screenMode = newScreenMode;
  },
  fullScreen(state) {
    state.fullScreen = !state.fullScreen;
  },
  toggleGrade(state, payload) {
    state.activeSheet.grading[payload.dataIndex][payload.index].selected = !state.activeSheet.grading[payload.dataIndex][payload.index].selected;
  },
  toggleAll(state, index) {
    const values = state.activeSheet.grading[index].filter(item => item.selected);
    var toChange = true;
    if (values.length === state.activeSheet.grading[index].length) toChange = false;

    for (var i = 0; i < state.activeSheet.grading[index].length; i++) {
      state.activeSheet.grading[index][i].selected = toChange;
    }
  },
  updateComment(state, value) {
    state.activeSheet.comments = value;
  },
  updateDuplicate(state, value) {
    state.activeSheet.duplicate = value;
  },
  showSheet(state, value) {
    state.activeSheet = {...Object.assign({}, value)};

    state.activeSheet.grading = [
      value.grading[0].map((item) => {
        return {...item};
      }),
      value.grading[1].map((item) => {
        return {...item};
      })
    ];

    state.activeSheet.students = value.students.splice();

    state.minimizeHeader = true;
  },
  setLate(state, value) {
    state.activeSheet.late = value;
  },
  showStart(state, value) {
    state.minimizeHeader = value;
    state.activeSheet = {...Object.assign({}, BASE_TEMPLATE)};
    state.activeSheet.grading = [
      BASE_TEMPLATE.grading[0].map((item) => {
        return {...item, selected: false};
      }),
      BASE_TEMPLATE.grading[1].map((item) => {
        return {...item, selected: false};
      })
    ];
    state.activeSheet.students = BASE_TEMPLATE.students.splice();
  },
  saveGrading(state) {
    state.completedSheets.push(state.activeSheet);
  },
  addStudent(state, payload) {
    let students = [...payload];

    students = students.map(item => {
      const studentsByName = state.allStudents.filter(sItem => sItem.name === item);
      const studentsByCode = state.allStudents.filter(sItem => sItem.uniId === item);

      if (studentsByName.length !== 0) {
        return studentsByName[0].name;
      } else if (studentsByCode.length !== 0) {
        return studentsByCode[0].name;
      } else {
        return item;
      }
    });

    state.activeSheet.students = [...students];
  },
  activeStudentClicked(state, payload) {
    const studentsByName = state.allStudents.filter(sItem => sItem.name === payload);

    if (studentsByName.length > 0) {
      state.activeSheet.author = studentsByName[0].uniId;
    } else {
      state.activeSheet.author = payload;
    }

    if (state.activeSheet.homeworkVersion !== -1 && state.activeSheet.author.trim().length > 0) {
      state.minimizeHeader = true;
    }
  }
}
