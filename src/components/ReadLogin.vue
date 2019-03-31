<template>
    <div id="read-login">
       <div class="content">
            <p class="fhbtn"><a href="javascript:history.go(-1)"></a></p>
            <h1></h1>
            <div class="login-box">
                <p class="lsolid"></p>
                <div class="login">
                <router-link to="/login" style="color:#0f0">登录</router-link>

                <!-- <a href="login_m.html">登录</a> -->
                <span></span>
                <router-link to="/reg">注册</router-link>

                <!-- <a href="reg_m.html">注册</a> -->
                </div>
                <p class="rsolid"></p>
            </div>
            <ul>
                <li class="lifirst">
                <input type="text" v-model.lazy="tex"/> 
                <span>帐号</span>
                </li>
                <li>
                <input type="password" v-model.lazy="pass"/>
                <span>密码</span>
                </li>
            </ul>
            <div class="footbox">
                <input type="button" value="登 录" class="login-btn" @click="click"/>
                <span class="tip" v-text="msg"></span>
                <a href="javascript:;" class="tishi">忘记密码？</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            tex:"",
            pass:"",
            msg:""
        }
    },
    methods:{
        click(){
            let  data = {
                username:this.tex,
                password:this.pass,
            }
            axios({
                url:"/api/login",
                data:data,
                method:"post"
            }).then((res)=>{
                if(res.data.error == 0 ){
                    this.msg = "登陆成功..."
                    console.log(res.data)
                    setTimeout(() => {
                        this.$router.push('/user')
                    }, 300);
                }else{
                    this.msg = "用户名/密码不符，请重新输入。"
                    setTimeout(() => {
                        this.msg = "";
                        this.$router.push('/login')
                    }, 1000);
                }
            })
        }
    }
}
</script>

 <style>
    #read-login .content{max-width:6.4rem; margin:0 auto;}
    #read-login .content .fhbtn{ padding-top:0.27rem;}
    #read-login .content .fhbtn a{ display:block;width:0.23rem;height:0.25rem; background:url(../assets/img/history1.png) no-repeat 0 0; background-size:100%; margin-left:0.3rem;}
    #read-login .content h1{width:3rem;height:2rem; background:url(../assets/img/login.gif) no-repeat 0 0; background-size:100%; margin:0 auto;}
    #read-login .content .login{width:2.0rem;height:0.38rem; margin:0 auto; margin-top:0.85rem;}
    #read-login .login a{width:0.97rem;height:0.38rem; font-size:0.35rem; line-height:0.38rem; float:left; color:#4c4f50; text-align:center;}
    #read-login .login span{ float:left;height:0.38rem; border-left:1px solid #4c4f50;}
    #read-login .content .login-box{ position:relative;}
    #read-login .content .login-box .lsolid{width:1.96rem;height:0.18rem; border-bottom:1px solid #4c4f50; position:absolute;top:0;left:0.1rem;}
    #read-login .content .login-box .rsolid{width:1.96rem;height:0.18rem; border-bottom:1px solid #4c4f50; position:absolute;top:0;right:0.1rem;}
    #read-login .content ul{width:5.78rem;height:1.92rem; border:1px solid #e5e7e8; background:#fff; margin:0 auto; margin-top:0.68rem;}
    #read-login .content ul li{height:0.95rem; position:relative;}
    #read-login .content ul li.lifirst{border-bottom:1px solid #e5e7e8;}
    #read-login .content ul li input{ padding-left:1.24rem;width:4.54rem;height:100%; font-size:0.4rem;text-indent:0.1rem}
    #read-login .content ul li span{width:1.23rem;height:0.49rem; position:absolute;top:0.26rem;left:0; border-right:1px solid #676868; color:#676868; font-size:0.25rem; line-height:0.49rem; text-align:center;}
    #read-login .content .footbox{width:4.65rem;height:0.65rem;margin:0 auto; }
    #read-login .content .login-btn{width:4.65rem;height:0.65rem; background:#9515df; color:#fff; text-align:center; line-height:0.65rem; border-radius:8px; display:block; margin-top:0.62rem; font-size:0.28rem;}
    #read-login .content .tishi{width:1.4rem; font-size:0.25rem; margin-top:0.28rem; display:block;}
    #read-login .content .tip{display: block;font-size: 0.3rem;padding-top:0.1rem }
  </style>