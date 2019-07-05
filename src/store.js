import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    computerScore: 0,
    playerScore: 0,
    drawTotal: 0,
    gameTotal: 0
  },
  mutations: {
    CHANGE_SCORES(state, computerWin, isDraw) {
      if (isDraw) {
        state.drawTotal;
      } else {
        if (computerWin) {
          state.computerScore++;
        } else {
          state.playerScore++;
        }
      }

      state.gameTotal++;
    }
  },
  getters: {
    computerScore: state => state.computerScore,
    playerScore: state => state.playerScore,
    drawTotal: state => state.drawTotal,
    gameTotal: state => state.gameTotal
  },
  actions: {
    UPDATE_SCORE: async (context, computerWin, isDraw) => {
      context.commit("CHANGE_SCORES", computerWin, isDraw);
    }
  }
});
