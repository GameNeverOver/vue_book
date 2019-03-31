<template>
<div id="listBook">
    <div class="newsList" >
         <div class="shu">
           <b @click="ok" :style="'color:' + color"  >大家名文</b>
           <b @click="no" :style="'color:' + color2">闲情趣闻</b>
         </div>
        <a href="javascript:;">
          
        </a>
        <ul  v-show="onoff">
          <li v-for="val of $route.query.data" :key= val.des > 
             <router-link :to="'/detail/' + val.des + '?type=column'"  href="javascript:;"> 
                  <div class="box">
                    <a href="javascript:;" class="link">
                      <h2>{{val.title}}</h2>
                      <p>{{val.detail.auth}}</p>
                    </a>
                    <img :src="'http://47.101.222.54:3333' + [val.detail.auth_icon]"  >
                  </div>
            </router-link>
          </li> 
        </ul>

        <ul v-show="!onoff">
          <li v-for="val of quwen" :key= val.des > 
             <router-link :to="'/detail/' + val.des + '?type=home'"  href="javascript:;"> 
                  <div class="box">
                    <a href="javascript:;" class="link">
                      <h2>{{val.title}}</h2>
                      <p>{{val.detail.auth}}</p>
                    </a>
                    <img :src="'http://47.101.222.54:7000' + [val.detail.auth_icon]"  >
                  </div>
            </router-link>
          </li> 
        </ul>
    </div>
    </div>
</template>
<script>
export default {
  data(){
    return {
      quwen: "",
      onoff:true,
      color:"",
      color2:""
    }
  },
   beforeRouteEnter(to,from,next){
     axios({
       url:"/api/column",
        }).then((res)=>{
          // to.query.data = res.data;      //作家
            // console.log(res.data)
            to.query.data = res.data;  
            console.log(to.query.data)
            next()  
      })
  },
    methods:{
      ok(){
        this.color = "#66f;font-size:0.3rem"
        this.color2 = ""
        this.$root.onoff = true
        this.onoff = this.$root.onoff  
      },
     
      no(){
        this.color2 = "#66f;font-size:0.3rem"
        this.color = ""
        this.$root.onoff = false
        this.onoff = this.$root.onoff  ;
      }
    },
    mounted(){
      this.onoff = this.$root.onoff  ;
       if(this.$root.onoff){
        this.color = "#66f;font-size:0.3rem"
      };

      if(!this.$root.onoff){
          this.color2 = "#66f;font-size:0.3rem"
      };

      axios({            //趣闻
        url:"./api/home" ,
          }).then(
            res=>{
              let arr2 = res.data.reverse()
                this.quwen = arr2 ; 
              }
          ) ;
    }
}
</script>
<style>
  #listBook .newsList{width:6.4rem;padding-top: 0.5rem}
  #listBook .newsList div.shu{display: flex;justify-content:space-around}
  #listBook .newsList div.shu b{display:block;font-size: 0.2rem}
   
  #listBook .newsList ul{ padding:0 0.4rem;}
  #listBook .newsList ul li{ color:#494d4d; padding:0.2rem 0 0.1rem 0; border-bottom:1px dashed #ccc;}
  #listBook .newsList ul li .box{display: block;display:flex;justify-content: space-between;padding: 0 0.1rem}
  #listBook .newsList ul li .link{padding-top: 0.1rem}
  #listBook .newsList ul li img{width: 1rem;height: 1rem;}
  #listBook .newsList ul li h2{  font-size:0.33rem; overflow:hidden; color:teal}
  #listBook .newsList ul li p{ font-size:0.23rem;margin-top: 0.1rem}
  #listBook .newsList{clear: both;margin-bottom:1rem;}
</style>

