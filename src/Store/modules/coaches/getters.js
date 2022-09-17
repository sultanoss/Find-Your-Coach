export default {
  coaches(state) {
    return state.coaches;
  },
  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0;
  },
  isCoach(state, getters, rootState, rootGetters) { //check Coach id (is the user is a coach)
    const coaches = getters.coaches;
    const userId = rootGetters.userId;
    // some method return true if condition = true
    return coaches.some(coach => coach.id === userId);

  },
};