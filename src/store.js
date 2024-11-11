import { createStore } from 'vuex';

const store = createStore({
  state: {
    message: '',
    type: ''
  },
  mutations: {
    setMessage(state, payload) {
      state.message = payload.message;
      state.type = payload.type;
    },
    clearMessage(state) {
      state.message = '';
      state.type = '';
    }
  }
});

export default store;
