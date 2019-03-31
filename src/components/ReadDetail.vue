<template>
    <div id="read-detail">
        <div class="nav">
            <ul>
                <li class="l-btn" @click="goback">
                    <a href="javascript:history.go(-1)"></a>
                </li>
            </ul>
            </div>
            <div class="content">
            <div class="header clear">
                <h2><img :src="url" alt=""/></h2>
                <p>{{ title }}
                    <br>
                <i>{{ auth }}</i>
                </p>
                <span>{{ time|abc(time) }}</span>
            </div>
            <div class="cont">
                <div v-html="msg" style="background:rgba(122, 64, 103, 0.6);padding:0.11rem"></div>
            </div>
            </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            msg:"" ,
            url:"http://47.101.222.54:3333" ,
            auth:"",
            time:"",
            title:""
        }
    },
    methods:{
        goback(){
           window.history.go(-1)
        }
    },
    mounted(){
        axios({
            url:"./api/" + this.$route.query.type 
            }).then(
            res=>{
            let arr = res.data;
            let now = this.$route.params.id-1 ;
            this.msg = arr[now].detail.content ;
            this.auth = arr[now].detail.auth ;
            this.url += arr[now].detail.auth_icon ;
            this.time = arr[now].time ;
            this.title = arr[now].title ;
        })
    }
}
</script>

  <style>
    #read-detail .nav{width:100%; position:fixed;top:0;left:0; background:rgba(12, 84, 133, 0.8); border-bottom:1px solid #e8eaec; z-index:99;}
    #read-detail .nav ul{width:6.4rem;height:0.45rem; padding-top:0.15rem; margin:0 auto;}
    #read-detail .nav ul li{width:0.29rem;height:0.31rem; background:url(../assets/img/history.png) no-repeat 0 0; background-size:100%; margin:0 0 0 0.38rem;}

    #read-detail .content{max-width:6.4rem; margin:0 auto; margin-top:0.6rem; background:#f2f4f5; padding-bottom:0.85rem;}
    #read-detail .content .header{ padding:0.39rem 0.28rem 0.15rem 0.28rem; height:auto; background: none;position: relative; }
    #read-detail .header h2{ float:left; margin-right:0.18rem;}
    #read-detail .header p{margin-top:0.2rem; font-size:0.3rem;font-weight:700}
    #read-detail .header p i {font-size:0.1rem;color: firebrick;font-weight:400}
    #read-detail .header img{width: 1rem;height:1rem;border-radius:50%}
    #read-detail .content .header span{position: absolute;right:0.4rem;bottom:0.3rem;color: teal}

    #read-detail .content .cont{ padding:0 0.4rem; color:#030303;font-size: 0.27rem}
    #read-detail .cont h3{ font-size:0.4rem; line-height:0.6rem; padding-bottom:0.25rem; border-bottom:1px solid #494d4d;}
    #read-detail .cont .time{height:0.24rem; line-height:0.24rem; margin:0.26rem 0; }
    #read-detail .time p{position:relative;}
    #read-detail .time span{width:0.33rem;height:0.32rem; position:absolute; top:-0.02rem;right:-0.35rem;}
    #read-detail .time span img{width:100%;height:100%;}

    #read-detail .foot-btn{width:100%;height:0.8rem; background:#fff; border-top:1px solid #e8eaec; position:fixed; left:0;bottom:0;}
    #read-detail .foot-btn ul{width:6.4rem; margin:0 auto;height:0.52rem; margin-top:0.16rem;}
    #read-detail .foot-btn ul li{ float:left;}
    #read-detail .foot-btn ul li a{width:100%;height:100%; display:block;}
    #read-detail .foot-btn ul .say{width:2.03rem;height:0.52rem; border-right:1px solid #e8eaec;}
    #read-detail .say i{width:0.36rem;height:0.26rem; background:url(../assets/img/say.png) no-repeat 0 0; background-size:100%; float:left; margin-left:0.7rem; margin-top:0.13rem;}
    #read-detail .say span{height:0.26rem; float:left; line-height:0.26rem; margin-left:0.16rem; margin-top:0.13rem;}
    #read-detail .foot-btn ul .zan{width:1.86rem;height:0.52rem; border-right:1px solid #e8eaec;}
    #read-detail .zan i{width:0.36rem;height:0.28rem; background:url(../assets/img/zan1.png) no-repeat 0 0; background-size:100%; float:left; margin-left:0.54rem; margin-top:0.13rem;}
    #read-detail .zan span{height:0.26rem; float:left; line-height:0.26rem; margin-left:0.16rem; margin-top:0.13rem;}
    #read-detail .foot-btn ul .xing{width:1.2rem;height:0.52rem; border-right:1px solid #e8eaec;}
    #read-detail .xing i{width:0.34rem;height:0.24rem; margin:0 auto; display:block; padding-top:0.1rem;}
    #read-detail .xing i img{width:100%;}
    #read-detail .foot-btn ul .fx{width:1.25rem;height:0.52rem;}
    #read-detail .fx i{width:0.33rem;height:0.08rem;display:block; margin:0 auto; padding-top:0.15rem;}
    #read-detail .fx i img{width:100%;}
  </style>