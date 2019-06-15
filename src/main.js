import $ from 'jquery'; 
import Vue from 'vue';
import VueRouter from 'vue-router'
//import ** from *** 是ES6中导入包的方式
/* import './public/css/index.css'; */
//import router from './router.js';
import app from './components/app.vue';
import {Header, Button,Cell} from 'mint-ui';
import 'mint-ui/lib/style.css';
import './lib/mui/css/mui.min.css';

//Vue.use(VueRouter);
Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Cell.name, Cell);

var wm = new Vue({
    el:"#app",
    render:c=>c(app)
})
