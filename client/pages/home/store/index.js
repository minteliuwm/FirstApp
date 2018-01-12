import axios from 'axios';

export default {
  namespaced: true,
  state: {
    name: 'minteliu'
  },
  mutations: {
    getName(state) {
      return state.name;
    },
    setName(state, name) {
      state.name = name;
    }
  },
  actions: {
    getNameByRequest(context) {
      axios.get('/users/getUserName').then(res => context.commit('setName', res.data));
    }
  }
};
