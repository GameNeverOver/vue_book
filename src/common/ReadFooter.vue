<template>
    <!--尾部-->
    <div class="foot-btn" >
      <ul>
        <router-link to="/home" tag="li" class="home1" active-class="home"><a href="javascript:;"></a></router-link>
        <router-link to="/list" tag="li" class="find" active-class="active"><a href="javascript:;"></a></router-link>
        <router-link to="/follow" tag="li" class="follow" active-class="active"><a href="javascript:;"></a></router-link>
        <router-link to="/user" tag="li" class="my" active-class="my1"><a href="javascript:;"></a></router-link>
      </ul>
    </div>
</template>
<style>
    .foot-btn{width:100%;height:0.8rem; background:#fff; position:fixed; left:0; bottom:0; border-top:1px solid #9e9a95;}
    .foot-btn ul{width:100%; height:0.8rem;margin:0 auto;display: flex;justify-content: space-around;align-items: center;}

    .foot-btn ul li a{ display:block; width:100%;height:100%;}
    .foot-btn ul .home1{width:0.44rem;height:0.59rem; background:url(../assets/img/home1.png) no-repeat 0 0; background-size:100%;}
    .foot-btn ul .home{width:0.44rem;height:0.59rem; background:url(../assets/img/home.png) no-repeat 0 0; background-size:100%;}
    .foot-btn ul .find{width:0.44rem;height:0.59rem; background:url(../assets/img/find.jpg) no-repeat 0 0; background-size:120% 110%;}
    /*  */
    .foot-btn ul .my{width:0.39rem;height:0.63rem; background:url(../assets/img/my.png) no-repeat 0 0;background-size:100%; }
    .foot-btn ul .my1{width:0.39rem;height:0.63rem; background:url(../assets/img/my1.png) no-repeat 0 0;background-size:100%; }
    .foot-btn ul .follow{width:0.39rem;height:0.63rem; background:url(../assets/img/gou.jpg) no-repeat 0 0.12rem;background-size:100%;}
    .foot-btn ul .active{box-shadow: 1px 1px 1px #00f}
</style>

