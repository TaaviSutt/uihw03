export const currentUserUrl = state => {
  console.log(state.activeSheet)
  return state.activeSheet.author.trim().length > 0 && state.homeworkVersion !== -1 ? "http://dijkstra.cs.ttu.ee/~"
    + state.activeSheet.author +  "/ui/t" + state.activeSheet.homeworkVersion + "/" : ""
};

export const activeHomeworkVersion = state => {
  return state.activeSheet.homeworkVersion;
};

export const minimizeHeader = state => state.minimizeHeader;

export const screenMode = state => state.screenMode;

export const fullScreen = state => state.fullScreen;

export const grading = state => state.activeSheet.grading;

export const duplicate = state => state.activeSheet.duplicate;

export const comments = state => state.activeSheet.comments;

export const completedSheets = state => state.completedSheets;

export const late = state => state.activeSheet.late;

export const students = state => state.activeSheet.students;
