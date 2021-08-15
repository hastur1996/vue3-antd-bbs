import axios  from "../../utils/http/index"
import qs from 'qs'
import base from '../base'

interface loginConfig {
  username: string,
  password: string
}

const apiLogin = {
  login(params: loginConfig) {
    return axios.post(`${base.sq}/login`, qs.stringify(params));
  }
}
export default apiLogin