import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './styles/common.scss'
import api from './api/index'

createApp(App).use(router).use(store).use(antd).mount('#app')
