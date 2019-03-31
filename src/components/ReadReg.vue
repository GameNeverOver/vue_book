<template>
    <div id="read-reg">
       <div class="content">
            <p class="fhbtn"><a href="javascript:history.go(-1);"></a></p>
            <h1></h1>
            <div class="login-box">
                <p class="lsolid"></p>
                <div class="login">
                <router-link to="/login">登录</router-link>

                <!-- <a href="login_m.html">登录</a> -->
                <span></span>
                <router-link to="/reg" style="color:#0f0">注册</router-link>

                <!-- <a href="reg_m.html">注册</a> -->
                </div>
                <p class="rsolid"></p>
            </div>
            <ul>
                <li class="lifirst">
                <input type="text"  v-model.lazy="tex" @focus="focus"/>
                <span>帐号</span>
                </li>
                <li>
                <input type="password"  v-model.lazy="pass"/>
                <span>密码</span>
                </li>
            </ul>
            <div class="footbox">
                <input type="button" @click="reg" value="注 册" class="login-btn"/>
                <span class="tip" v-text="msg"></span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
      data(){   
          return {
              tex:"大人，快取个名字吧",
              pass:"",
              msg:""
          }
      },
      methods:{
          focus(){
              if(this.tex=="大人，快取个名字吧"){
                this.tex = "";
              }
          },
          reg(){
            let  data = {
                username:this.tex,
                password:this.pass,
            };
            axios({
                url:"/api/reg",
                data:data,
                method:"post"
            }).then(res=>{
                console.log(res )
                switch(res.data.error){
                    case 1:
                       this.msg="用户名 不合法/重名";
                            break;
                    case 0:
                        this.msg="注册成功，即将调转到登录";
                        setTimeout(() => {
                            this.$router.push('/login')
                        }, 1200);
                            break;
                    case 2:
                       this.msg="网络请求错误，请刷新重试";
                            break;
                    }
                }
            )
          }
      }

}
</script>

  <style>
    #read-reg .content{max-width:6.4rem; margin:0 auto;}
    #read-reg .content .fhbtn{ padding-top:0.27rem;}
    #read-reg .content .fhbtn a{ display:block;width:0.23rem;height:0.25rem; background:url(../assets/img/history1.png) no-repeat 0 0; background-size:100%; margin-left:0.3rem;}
    #read-reg .content h1{width:4rem;height:3rem; background:url(../assets/img/reg.jpg) no-repeat 0 0; background-size:100%; margin:0 auto;}
    #read-reg .content .login{width:2.0rem;height:0.38rem; margin:0 auto; margin-top:0.85rem;}
    #read-reg .login a{width:0.97rem;height:0.38rem; font-size:0.35rem; line-height:0.38rem; float:left; color:#4c4f50; text-align:center;}
    #read-reg .login span{ float:left;height:0.38rem; border-left:1px solid #4c4f50;}
    #read-reg .content .login-box{ position:relative;}
    #read-reg .content .login-box .lsolid{width:1.96rem;height:0.18rem; border-bottom:1px solid #4c4f50; position:absolute;top:0;left:0.1rem;}
    #read-reg .content .login-box .rsolid{width:1.96rem;height:0.18rem; border-bottom:1px solid #4c4f50; position:absolute;top:0;right:0.1rem;}
    #read-reg .content ul{width:5.78rem;height:1.92rem; border:1px solid #e5e7e8; background:#fff; margin:0 auto; margin-top:0.68rem;}
    #read-reg .content ul li{height:0.95rem; position:relative;}
    #read-reg .content ul li.lifirst{border-bottom:1px solid #e5e7e8;}
    #read-reg .content ul li input{ padding-left:1.24rem;width:4.54rem;height:100%; font-size:0.4rem;text-indent:0.1rem;}
    #read-reg .content ul li span{width:1.23rem;height:0.49rem; position:absolute;top:0.26rem;left:0; border-right:1px solid #676868; color:#676868; font-size:0.25rem; line-height:0.49rem; text-align:center;}
    #read-reg .content .footbox{width:4.65rem;height:0.65rem;margin:0 auto; }
    #read-reg .content .login-btn{width:4.65rem;height:0.65rem; background:#99f; color:#fff; text-align:center; line-height:0.65rem; border-radius:8px; display:block; margin-top:0.62rem; font-size:0.28rem;}
    #read-reg .content .tip{display: block;text-align: center;font-size: 0.35rem}
  </style>
   