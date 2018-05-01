export default {
  homeworkVersion(state, id) {
    state.homeworkVersion = id;
  },
  studentName(state, studentName) {
    state.studentName = studentName;

    if (state.homeworkVersion !== -1 && studentName.trim().length > 0) {
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
    state.grading[payload.dataIndex][payload.index].selected = !state.grading[payload.dataIndex][payload.index].selected;
  },
  toggleAll(state, index) {
    const values = state.grading[index].filter(item => item.selected);
    var toChange = true;
    if (values.length === state.grading[index].length) toChange = false;

    for (var i = 0; i < state.grading[index].length; i++) {
      state.grading[index][i].selected = toChange;
    }
  }
}
