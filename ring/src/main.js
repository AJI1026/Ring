import Vue from 'vue'
import App from './App.vue'
// 路由
import router from './router'
// 移动端适配
import 'lib-flexible/flexible'

// 引入组件
import { Swipe, SwipeItem, Icon, NavBar, Tabbar, 
  TabbarItem, Image as VanImage, Form,  Field, Button,
  CountDown } from 'vant'

// 引入全局样式
import 'vant/lib/index.css'
import './styles/index.less'

// 使用组件
// 轮播组件
Vue.use(Swipe);
Vue.use(SwipeItem);
// 图标组件
Vue.use(Icon);
// 导航栏组件
Vue.use(NavBar);
// 标签栏组件
Vue.use(Tabbar);
Vue.use(TabbarItem);
// 图片组件
Vue.use(VanImage);
// 表单组件、按钮组件
Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
// 倒计时组件
Vue.use(CountDown);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
