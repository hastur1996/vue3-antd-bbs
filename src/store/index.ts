import {createStore} from 'vuex'
import userInfo from './modules/userInfo';

const store = createStore({
  state: {
    token: '',
    netWork: true,
  },
  modules: {
    userInfo
  },
  mutations: {
    changeNetWork(state, params: boolean) {
      state.netWork = params;
    }
  }
})

export default store;