<template>
<div id="app">
    <!-- <read-home></read-home> -->
    <!-- <read-detail></read-detail> -->
    <!-- <read-follow></read-follow> -->
    <!-- <read-reg></read-reg> -->
    <!-- <read-error></read-error> -->
    <!-- <read-user></read-user> -->

    <loading v-show="$root.loading"></loading>
    <router-view></router-view>

    <read-footer></read-footer>
</div>
</template>
<script>
import ReadFooter from "./common/ReadFooter" ;
// import ReadError from "./common/ReadError" ;

// import ReadHome from "./components/ReadHome" ;
// import ReadDetail from "./components/ReadDetail" ;
// import ReadFollow from "./components/ReadFollow" ;
// import ReadLogin from "./components/ReadLogin" ;
// import ReadReg from "./components/ReadReg" ;
// import ReadUser from "./components/ReadUser" ;
// html.style.background = "#00f" ;

export default {
 
  components:{
    ReadFooter,
    // ReadHome,
    // ReadDetail,
    // ReadFollow,
    // ReadLogin,
    // ReadReg,
    // ReadError,
    // ReadUser
  }
}
</script>
  
<style>
 
</style>
