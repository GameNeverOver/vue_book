//暴露方法
// export default ()=>{}   // 1 函数

import loading from "./components/loading.vue"


export default {        // 2 对象
    install(Vue){
        Vue.component("loading",loading)
    }
}