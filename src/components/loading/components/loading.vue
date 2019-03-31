<template>
    <div id="loading">
        <div class="loading">
            <span></span>
        </div>
        <p>不要着急，容我喝杯coffe</p>
    </div>
</template>
<script>
export default {
    props:{     // 使用此组件的路由/组件，可以组件标签上传递属性  props来接收
        title:{
            type:String,        //title 如果传了就按传的，不然就是default
            default:"加载中"    
        }
    },
}
</script>
<style>
#loading{
    position: fixed;
    left: 0;right: 0;
    top: 0;bottom: 0;
    margin: auto;
    z-index:99999;
    background:url("./loading.jpg");
    background-size: 100% 100%
}
#loading p{
    text-align: center;
    font: 700 0.7rem "";
    padding: 0.1rem;
    color: rgba(240, 41, 6, 0.6)
}
.loading{
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    margin: 0 auto;
    margin-top:2.8rem;
    position: relative;
    border:5px solid rgb(110, 39, 18);
    -webkit-animation: turn 2s linear infinite;
    opacity: 1;
    }
.loading span{
    display: inline-block;
    width: 0.8rem;
    height: 1rem;
    border-radius: 50%;
    background: rgb(10, 155, 10);
    position: absolute;
    left: 50%;
    margin-top: -15px;
    margin-left: -15px;
    -webkit-animation: changeBgColor 2s linear infinite;
}
@-webkit-keyframes changeBgColor{
    0%{
        background: lightgreen;
    }
    100%{
        background: rgb(104, 9, 128);
    }
}
@-webkit-keyframes turn{
    0%{
        -webkit-transform: rotate(0deg);
        border-color: rgb(171, 238, 171);
    }
    100%{
        -webkit-transform: rotate(360deg);
        border-color: rgb(136, 128, 20);
    }
}
</style>


