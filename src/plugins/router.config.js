import Vue from "vue" ;
import VueRouter from 'vue-router';

Vue.use(VueRouter);


import ReadHome from '../components/ReadHome'
import ReadFollow from '../components/ReadFollow'
import ReadFind from '../components/ReadFind'
import ReadUser from '../components/ReadUser'
import ReadList from '../components/ReadList'
import ReadLogin from '../components/ReadLogin'
import ReadReg from '../components/ReadReg'
import ReadDetail from '../components/ReadDetail'
import ReadSet from '../components/ReadSet'
import ReadError from '../common/ReadError'

let routes=[
    {path:'/home',component:ReadHome},
    {path:'/',redirect:'/home'},
    {path:'/follow',component:ReadFollow},
    {path:'/find',component:ReadFind},
    {path:'/detail/:id',component:ReadDetail},
    {path:'/list',component:ReadList},
    {path:'/user',component:ReadUser},
    {path:'/login',component:ReadLogin},
    {path:'/reg',component:ReadReg},
    {path:'/set',component:ReadSet},
    {path:'/*',component:ReadError}
  ];

const router = new VueRouter({routes});

export default router;