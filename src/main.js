import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import "animate.css"  

Vue.config.productionTip = false
//相对路径 指向assets  绝对路径 指向public

//配置全局资源
import "./assets/css/base.css";
import "./assets/js/font";

//路由引入
import router from "./plugins/router.config" ; 

// store的引入
import store from "./store"

//引入自定义插件
import loading from "./components/loading"
Vue.use(loading) 


// Vue.filter("zero",function(num){
//     if(num < 10){
//       return  "0" + num 
//     }else{
//       return num
//     }
// })

var a = document.getElementsByTagName("html")[0]
a.style.background = "#fff";

Vue.filter('abc',function(date){     //全局过滤器
  // console.log(date)
  let d = new Date()
  d.setTime(Number(date))
  let x = d.getMonth() + 1  //月
  let y = d.getDate()  //日
  let z = d.getDay()  // 礼拜几
  // {{y|"zero"}}

  // console.log(y)
  // let x = d.getTime()
  return  x +"月" + y + "日" + " 星期" +z 
}) 
// import config from "./config"
let vm = new Vue({
  data:{
      bgcolor:"#0f0",
      onoff:true,   // 列表页的渲染开关
      loading : false
  },
  render: h => h(App),
  router,
  store,

  watch:{
    bgcolor:function(value){
      a.style.background = value;
      console.log(a)
    }
  },
   

}).$mount('#app')

export default vm;
