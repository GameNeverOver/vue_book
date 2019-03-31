<template>
    <div id="read-user">
        <div class="content">
            <div class="header">
                <h2><img :src="$route.query.data.data.icon" /></h2>
                <div class="user-box">
                    <a class="name" href="javascript:;">{{$route.query.data.data.username}}</a>
                    &nbsp;&nbsp;
                    <a @click="out" href="javascript:;">注销</a>
                </div>
                <ul class="clear">
                    <li>
                        <span>{{$route.query.data.data.follow}}</span>
                        <p>关注</p>
                    </li>
                    <li>
                        <span>{{$route.query.data.data.fans}}</span>
                        <p class="end">粉丝</p>
                    </li>
                </ul>
            </div>
            <div class="docList">
                <ul>
                    <li class="gk-text">
                        <i></i>
                        <p>公开博文</p>
                        <b></b>
                        <span>0</span>
                    </li>
                    <li class="zan">
                        <i></i>
                        <p>我的赞</p>
                        <b></b>
                        <span>0</span>
                    </li>
                    <li class="mm-text">
                        <i></i>
                        <p>草稿箱</p>
                        <b></b>
                        <span>0</span>
                    </li>
                    <li class="sc-text">
                        <i></i>
                        <p>收藏夹</p>
                        <b></b>
                        <span>0</span>
                    </li>
                    <li class="my_cz">
                        <i></i>
                        <p> 
                            <router-link to="/set">个性化设置</router-link>
                        </p>
                    </li>
                </ul>
            </div>
            </div>
          
    </div>
</template>
<script>
export default {
    data(){
        return {
            username : "",
        }
    },
    name:"user",
    beforeRouteEnter(to,from,next){             //组件内的前置守卫
        // $route.query={a:1};
        // console.log("组件前置内部守卫，this拿不到") ;
        // console.log("组件前置内部守卫",to) ;
        // console.log("组件前置内部守卫",from) ;

        // axios({             //守卫 + 预载

        //     url:"/web/lining_user"
        // }).then(
        //     res=>{
        //         // if(res.data.auth){
        // //             //     // to == $route             为什么呢
        //             to.query.data = res.data.data;      //预载数据 将数据负载到目标路由上
        //             console.log(to.query.data)
        //         //     console.log(to.query.data,to)
        //         //     next()
        //         // }else{
                    
        //             // }

        //             // console.log(this.$router)
        //     }  
        // )
         axios({
                url:"/api/user",
            }).then((res)=>{
                to.query.data = res.data;      //预载数据 将数据负载到目标路由上
                // console.log(to.query.data)
                if(res.data.error == 0 ){
                        // this.$router.push('/user')
                    next()
                }else{
                   next("/login")
                    // this.$router.push('/user')
                }
            })

    },
    methods:{
        out(){
            axios({
                url:"/api/logout",
            }).then((res)=>{
                // console.log(res)
                this.$router.push('/home')
                // console.log(res)
            })
        }
    }
}
</script>

<style>
    #read-user .content{max-width:6.4rem; margin:0 auto; margin-bottom:0.8rem;}
    #read-user .content .header{width:6.4rem;height:2.84rem; background:#394485; padding-top:0.3rem;}
    #read-user .header h2{width:1.3rem;height:1.3rem; border-radius:50%; margin:0 auto;display: flex;align-items: center}
    #read-user .header h2 img{width:1.3rem;}
    #read-user .header .user-box{width:4rem; font-size:0.25rem; color:#fff; margin:0 auto; margin-top:0.2rem;display:flex;justify-content: center}
    #read-user .user-box a{color:#fff;font-weight:100;line-height:0.3rem; }

    #read-user .user-box a.name{font-weight: 700;font-size: 0.3rem;color:rgb(240, 126, 230);margin-right: 0.15rem}
    #read-user .header ul{ margin-top:0.15rem;}
    #read-user .header ul li{width:50%;height:0.7rem; float:left; color:#fff;}
    #read-user .header ul li span{height:0.37rem; line-height:0.37rem; text-align:center; display:block; font-size:0.25rem;}
    #read-user .header ul li p{ text-align:center; font-size:0.3rem;height:0.32rem; line-height:0.32rem; border-right:1px solid #fff;}
    #read-user .header ul li p.end{ border:0;}

    #read-user .content .docList{width:6.4rem; margin:0 auto;}
    #read-user .docList ul{ border-top:1px solid #7b7c7c;}
    #read-user .docList ul li{ background:#fff;height:0.79rem; border-top:1px solid #bcbbba; border-bottom:1px solid #7b7c7c;}
    #read-user .docList ul li span{ float:right;margin-right:0.14rem; margin-top:0.26rem;}
    #read-user .docList ul li b{width:0.21rem;height:0.24rem; background:url(../assets/img/next_img.png) no-repeat 0 0; background-size:100%; float:right;margin-right:0.34rem; margin-top:0.28rem;}

    #read-user .docList ul .gk-text i{width:0.37rem;height:0.37rem; background:url(../assets/img/gk_text.png) no-repeat 0 0; background-size:100%; float:left; margin-left:0.29rem; margin-top:0.24rem;}
    #read-user .gk-text p{ float:left; font-size:0.25rem;margin-left:0.29rem; margin-top:0.25rem;}
    #read-user .docList ul .mm-text i{width:0.29rem;height:0.35rem; background:url(../assets/img/mm_text.png) no-repeat 0 0; background-size:100%; float:left; margin-left:0.32rem; margin-top:0.24rem;}
    #read-user .mm-text p{ float:left; font-size:0.25rem;margin-left:0.35rem; margin-top:0.25rem;}
    #read-user .docList ul .cg-text i{width:0.37rem;height:0.37rem; background:url(../assets/img/cg_text.png) no-repeat 0 0; background-size:100%; float:left; margin-left:0.29rem; margin-top:0.24rem;}
    #read-user .cg-text p{ float:left; font-size:0.25rem;margin-left:0.29rem; margin-top:0.25rem;}
    #read-user .docList ul .sc-text i{width:0.37rem;height:0.37rem; background:url(../assets/img/sc_text.png) no-repeat 0 0; background-size:100%; float:left; margin-left:0.29rem; margin-top:0.24rem;}
    #read-user .sc-text p{ float:left; font-size:0.25rem;margin-left:0.29rem; margin-top:0.25rem;}
    #read-user .docList ul .zan i{width:0.37rem;height:0.37rem; background:url(../assets/img/sc_text.png) no-repeat 0 0; background-size:100%; float:left; margin-left:0.29rem; margin-top:0.24rem;}
    #read-user .docList ul .zan p{ float:left; font-size:0.25rem;margin-left:0.29rem; margin-top:0.25rem;}
   
    #read-user .docList ul .my_cz i{width:0.37rem;height:0.37rem; background:url(../assets/img/my_cz.png) no-repeat 0 0; background-size:100%; float:left; margin-left:0.29rem; margin-top:0.24rem;}
    #read-user .my_cz p{ float:left; font-size:0.25rem;margin-left:0.29rem; margin-top:0.25rem;}
</style>

