<template>
    <div id="read-error">
        <div class="boxErr">
            <p>错误，错误</p>
            <p>错误，错误</p>
            <p>错误，错误</p>
            <img src="./er.gif" >
            
            <router-link to="/home">点击返回首页</router-link>
        </div>

    </div>
</template>
<style>
    .boxErr p{
        text-align: center;
        font-size: 0.4rem
    }
    .boxErr img{
        width: 5rem;
        margin: auto;
        display: block;
        border-radius: 20%
    }
    .boxErr a{
        display: block;
        font-size: 0.6rem;
        text-align: center;
        padding-top: 1rem;
    }
</style>

