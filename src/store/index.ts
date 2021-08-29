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
    },
    setToken(state, params: string) {
      state.token = params
    }
  }
})

export default store;