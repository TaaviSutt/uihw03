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

export const totalPoints = state => data => {

  if (!data) {
    data = state.activeSheet;
  }

  let partOne = data.grading[0].filter(item => item.selected).length;
  let partTwo = data.grading[1].filter(item => item.selected).length;
  let partThree = 0;
  let passed = true;

  if (partOne === data.grading[0].length) {
    partOne = 10;
  }

  if (partTwo > 10) {
    partTwo = 10;
  }

  if (data.late === "late2") {
    partThree = 2;
  }

  if (data.late === "late3") {
    partThree = 5;
  }

  let points = partOne + partTwo - partThree;

  if (partOne < 5 || points < 10 || data.duplicate) {
    passed = false;
  }

  if (data.duplicate) {
    points = 0;
  }

  return {points, duplicate: data.duplicate, passed};
};
