<template>
    <div id="read-home">
        <span class="top">读书能改变的，远比你想象中的要多。</span>

       <div class="banner">
        
        <ul class="clearfix">

          <li v-for="(val,index) of $route.query.data" :key=index >
            <router-link  class="big"
             to="/detail/1">
                <img :src="'http://47.101.222.54:3333/' + $route.query.data[index].banner" >
             </router-link>
              <span>{{val.title|abc(val.title)}}</span>
              <p>
                {{val.detail.content}}
              </p>
              
              <div class="small">
                <img :src="'http://47.101.222.54:3333/' + $route.query.data[index].detail.icon" >
                <b>{{val.detail.auth}}</b>
              </div>
          </li>
  
        </ul>
      </div>
    </div>
</template>
<script>

export default {
    data(){
      return {
        arr : "",
        // uir : "http://localhost:3000"
      }
    },
     beforeRouteEnter(to,from,next){  
        axios({            
            url:"./api/banner" ,
            // params:{dataName:"banner"}
        }).then(
            res=>{
              // this.$root.loading = true ;   
                let arr2 = res.data.reverse()
                to.query.data = arr2 ; 
                next()                   
            }
        )
    },

    mounted(){
     
      var mySwipe=new Swipe($('.banner')[0],{
      auto:100000,
      continuous:true,
      autoPlay:false,
      stopPropation:true,
      callback:function (index,element){
        $('.banner ol li').removeClass('active');
        $('.banner ol li').eq(index).addClass('active');
      }
    }) ;
  }
}
</script>
<style>
    #read-home .top{
        width:100%; 
        position:fixed; 
        top:0;left:0; 
        z-index:2; 
        background:#fff;
        opacity: 0.6;
        height:0.6rem;
        line-height:0.6rem;
        text-align:center;
        font-size:0.26rem;
        color:#00f;
    }
    #read-home .banner ul li{width:6.4rem;float:left;position:relative;height:100%;}
    /* #read-home .banner ul li img{width:100%; display:block;} */

    #read-home .banner .clearfix{padding-top:0.6rem}
    #read-home .banner .clearfix .big{height:3.5rem; width: 100%;overflow: hidden;display: block}
    #read-home .banner .clearfix .big img{display: block;width: 100%} 
    #read-home .banner .clearfix li span{font-size:0.2rem;display: block;text-align: right;padding:0.2rem 0.5rem}
    #read-home .banner .clearfix li p{font-size:0.33rem;padding:0 0.15rem;margin-bottom:0.3rem}

    #read-home .banner .clearfix .small{float: right;display: flex;align-items: center;padding-right: 0.1rem}
    #read-home .banner .clearfix .small img{width:0.35rem;height: 0.35rem}
    #read-home .banner .clearfix li b{font-size:0.3rem;display:block;text-align:right;text-indent: 0.1rem}


    #read-home .banner ol{position:absolute; right:0.2rem;bottom:0.2rem;}
    #read-home .banner ol li{width:0.15rem;height:0.15rem; background:#5477b2; float:left; border-radius:50%; margin-right:0.08rem;}
    #read-home .banner ol li.active{ background:#fff;}
   
</style>


