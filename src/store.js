import { createStore } from 'vuex';

const store = createStore({
  state: {
    message: '',
    type: '',
    isAuthenticated: true, // 后端开了的情况下需要为false
  },
  mutations: {
    setMessage(state, payload) {
      state.message = payload.message;
      state.type = payload.type;
    },
    clearMessage(state) {
      state.message = '';
      state.type = '';
    },
    setAuthentication(state, status) {
      state.isAuthenticated = status;
    }
  },
});

export default store;
