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
}
