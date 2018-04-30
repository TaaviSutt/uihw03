export const currentUserUrl = state => {
  return state.studentName.trim().length > 0 && state.homeworkVersion !== -1 ? "http://dijkstra.cs.ttu.ee/~" + state.studentName +  "/ui/t" + state.homeworkVersion + "/" : ""
};

export const activeHomeworkVersion = state => {
  return state.homeworkVersion;
};

export const minimizeHeader = state => state.minimizeHeader;

export const screenMode = state => state.screenMode;

export const fullScreen = state => state.fullScreen;
