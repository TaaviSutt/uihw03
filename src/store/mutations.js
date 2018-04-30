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
  }
}
