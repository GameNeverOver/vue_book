<template>
  <div id="read-find">
      <!--banner-->
      <div class="banner">
        <ul class="clearfix">
          <li><img src="../assets/images/img_1.jpg" alt=""/>
            <div class="text-box">
              <h2>还可以降低首付款健身房11111</h2>
              <p>刘德华 / 文</p>
            </div>
          </li>
          <li><img src="../assets/images/img_2.jpg" alt=""/>
            <div class="text-box">
              <h2>还可以降低首付款健身房2222</h2>
              <p>郭富城 / 文</p>
            </div>
          </li>
          <li><img src="../assets/images/img_3.jpg" alt=""/>
            <div class="text-box">
              <h2>还可以降低首付款健身房333</h2>
              <p>张学友  / 文</p>
            </div>
          </li>
          <li><img src="../assets/images/img_1.jpg" alt=""/>
            <div class="text-box">
              <h2>还可以降低首付款健身房11111</h2>
              <p>黎明 / 文</p>
            </div>
          </li>
        </ul>
      </div>
  </div>
</template>
<script>
export default {
  beforeRouteEnter(to,from,next){
    next()
     axios({
        url:"/api/column",
        }).then((res)=>{
            to.query.data = res.data;      //预载数据 将数据负载到目标路由上
            console.log(res.data)
            if(res.data.error == 0 ){
              console.log(1)
            }else{
                // next("/login")
                // this.$router.push('/user')
            }
      })
  },
  mounted(){
    var mySwipe=new Swipe($('.banner')[0],{
      auto:2000,
      continuous:true,
      stopPropation:true,
      callback:function (index,element){
        $('.banner ol li').removeClass('active');
        $('.banner ol li').eq(index).addClass('active');
      }
    })
  }
}
</script>

<style>
    /* .content{max-width:6.4rem; margin:0 auto; margin-bottom:0.8rem;}
    .content .banner{margin-top:0.6rem;position: relative;overflow: hidden; z-index: 1} */
    #read-find .banner ul li{width:6.4rem;float:left;position: relative;}
    #read-find .banner ul li img{width:100%; display:block;}
    #read-find .banner ul li .text-box{width:5.8rem; padding:0 0.3rem;height:1.24rem; position:absolute; left:0; bottom:0; color:#fff; background:rgba(0,0,0,0.5);}
    #read-find .text-box h2{ font-size:0.3rem; font-weight:normal; margin-top:0.22rem; line-height:100%; margin-bottom:0.22rem; overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}
    #read-find .text-box p{ line-height:100%;}
    
    #read-find .banner ol{position:absolute; right:0.2rem;bottom:0.2rem;}
    #read-find .banner ol li{width:0.15rem;height:0.15rem; background:#5477b2; float:left; border-radius:50%; margin-right:0.08rem;}
    #read-find .banner ol li.active{ background:#fff;}
</style>
