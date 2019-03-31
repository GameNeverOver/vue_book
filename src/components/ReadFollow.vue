<template>
<!-- 这是   留言   页面 -->
   <div id="talk">
       <h2>心情留言板</h2>
       <ul>
            <li v-for="val of $route.query.data" :key=val._id>
                <p class="content"> 
                    {{val.username}}
                </p>
                <span class="auth"> {{val.password}}</span>
                <b class="hert">{{val.nikename}}</b>
            </li>
       </ul>
       <b class="love" @click="add"> <span v-text="tex"> </span></b>
       <div class="wish" v-show="onoff">
           <textarea cols="30" rows="10" v-model.lazy="msg"></textarea>
          <p>
                <span>怎么称呼啊：</span><input type="text" v-model.lazy="name">
            </p>  
            <p>
                <span>啥心情啊：</span><input type="text" v-model.lazy="xinqing">
            </p>
            <div>
                <b class="send" @click="go">发送心情</b>
                <br>
                <b class="back" @click="add">溜了溜了，不想写了</b>
            </div>
       </div>
   </div>
</template>
<script>
export default {
    data(){
        return {
            tex:"留下心情",
            name:"杨少侠(点击修改)",
            xinqing:"美美哒(点击修改)",
            onoff:false,
            msg:""
        }
    },
    methods:{
        add(){
            if(!this.onoff){
                this.onoff = true
                }else{
                this.onoff = false
            }
        },
        go(){
            if(this.msg.length > 127 || !this.msg){
                this.tex = "内容不能为空哦,当然也不能太长呢"
            }else{
                if(this.name == "" || this.name =="杨少侠(点击修改)"){
                    this.tex = "名字呢，大侠！！"
                }else{
                    if(this.xinqing == "" ||this.xinqing =="美美哒(点击修改)"){
                        this.tex = "你现在什么心情呢！！"
                    }else{
                        axios({
                            url:"./api/follow",  //读取留言
                            params:{
                                username:this.msg,
                                password:this.name,
                                nikename:this.xinqing
                            }
                        }).then(
                            res=>{
                                console.log(res) ;
                            }
                        );
                       this.onoff = false ;
                       history.go(0)
                    }
                }
            }
        }
    },
    beforeRouteEnter(to,from,next){
        axios({
            url:"./api/follow2",  //读取留言
        }).then(
            res=>{
                let arr2 = res.data.reverse()
                console.log(arr2) ;
                to.query.data = arr2 ; 
                next()                   
            }
        )
    }
}
</script>

<style>
#talk{
    height: 100%;
    padding-top: 0.5rem;
    background: url("/upload/wish.jpg") no-repeat ;
    background-size: cover;
}
#talk h2{text-align: center;color: hotpink;font-size: 0.7rem} 
#talk ul{margin: 0;padding: 0;list-style: none;margin-bottom: 10%}
#talk ul li {
    font:  0.2rem/0.3rem "";
    background: url("/upload/wishBg.gif");
    background-size:cover;
    padding: 0.1rem 0.1rem 0.11rem 0.5rem;
    margin: 0.1rem;
}
#talk .love{display: block;text-align: center;font-size: 0.3rem;position:fixed;right: 0;top:0}

#talk .love span{background: orange;padding:0 0.1rem;cursor: pointer}
#talk .wish{text-align: center;position: fixed;left: 0;right: 0;bottom: 0;top: 0;margin: auto;padding-top: 50%;background: rgba(98, 100, 219, 0.6)}
#talk .wish p{text-align: left;padding-left: 25%;padding-top: 0.12rem}
textarea{resize: none;padding: 0.1rem;font-size: 0.22rem}
input{text-indent: 0.1rem;color: rgb(246, 7, 7); font-weight: 700;}
#talk .wish div {padding-top: 1rem}
#talk .wish div b{background: yellow;font-size: 0.3rem; margin-bottom: 0.5rem ;display: inline-block;padding: 0 0.1rem}
#talk .wish .back{background:#eee;font-size: 0.2rem;}
#talk .wish p span{color:rgb(2, 32, 31)}
#talk .content{font: 600 0.3rem/0.4rem "";text-indent: 0.15rem;color: teal}
#talk .auth{display: block;text-align: right;margin-right: 0.3rem;padding-bottom: 0.1rem; }
#talk .hert{display: block;text-align: right;margin-right: 0.3rem;padding-bottom: 0.1rem; color: rgb(135, 221, 37);}
</style>