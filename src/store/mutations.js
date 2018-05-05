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
    state.grading[payload.dataIndex][payload.index].selected = !state.grading[payload.dataIndex][payload.index].selected;
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
    state.activeSheet = {...value};
    state.minimizeHeader = true;
  },
  setLate(state, value) {
    state.activeSheet.late = value;
  }
}
