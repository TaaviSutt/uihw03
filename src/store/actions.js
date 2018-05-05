export const setHomeworkVersion = ({ commit }, payload) => {
  commit('homeworkVersion', payload)
};

export const setUserCode = ({ commit }, payload) => {
  commit('studentName', payload)
};

export const setScreenMode = ({ commit }, payload) => {
  commit('screenMode', payload)
};

export const toggleScreenWidth = ({ commit }) => {
  commit('fullScreen')
};

export const toggleGrade = ({ commit }, payload) => {
  commit("toggleGrade", payload)
};

export const toggleAll = ({commit}, payload) => {
  commit("toggleAll", payload)
};

export const updateDuplicate = ({commit}, payload) => {
  commit("updateDuplicate", payload)
};

export const updateComment = ({commit}, payload) => {
  commit("updateComment", payload)
};

export const showSheet = ({commit}, payload) => {
  commit("showSheet", payload)
};

export const setLate = ({commit}, payload) => {
  commit("setLate", payload)
};
