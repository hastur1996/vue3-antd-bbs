import axios from "axios";
import qs from "qs";
import store from "../../store";
import router from "../../router";
import { message as Message, Modal } from "ant-design-vue"

const tip = (reason: string) => {
  Message.error({
    duration: 1,
    content: reason,
  });
};

//登陆超时，或者token失效返回登陆页面
const toLogin = () => {
  if(router.currentRoute.value.name == 'login') return

  Modal.destroyAll();
  Modal.warning({
    title: '提示',
    content: '登录身份已失效,请重新登录!',
    onOk: ()=>{
      router.replace({
        name: 'login',
          query: {
              redirect: router.currentRoute.value.fullPath
            }
        })
      }
    })
};

interface errorMsg {
  status: number,
  reason: string
}

const errorHandle = (errorMsg: errorMsg) => {

};
//创建axios 实例
var instance = axios.create({timeout: 1000*12});
//设置请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencode';

/**
 * 请求拦截器
 * 每次请求前自动添加token
 */
instance.interceptors.request.use(
  config => {
    const token = store.state.token;
    token && (config.headers.Authorization = token);
    return config;
  },
  error => Promise.reject(error)
)

/**
 * 相应拦截器
 */

instance.interceptors.response.use(
  res => res.status == 200 ? Promise.resolve(res) : Promise.reject(res),
  error => {
    const { response } = error;
      if(response) {
        //请求已发出， 不在2XX范围内
        errorHandle({ 
          status: response.status,
          reason: response.data.reason
        });
        return Promise.reject(response)
      } else {
      //处理断网情况
      //eg：请求超时或断网，更新store里的network的状态
      if(!window.navigator.onLine) {

      } else {
        Promise.reject(error);
      }
    }
  }
)

export default instance;
