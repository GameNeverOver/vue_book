<template>
    <div class="newsListcolor" >
        <div class="box">
            <p>声音是听得见的色彩,色彩是看得见的声音。</p>
            <b>--玛利翁</b>
        </div>
        <ul>
            <li style="color:rgb(171, 236, 236)">
                <span>滑溜溜的青色</span> 
                <strong @click = 'change("rgb(171, 236, 236)")' >点击设置</strong>
            </li>
            <li style="color:rgb(161, 43, 89)">
              <span>充满热情的的红色</span>
              <strong @click = 'change("rgb(161, 43, 89)")'>点击设置</strong>
            </li>
            <li style="color:rgb(26, 182, 39)">
              <span>修色色的苹果绿</span>
              <strong @click = 'change("rgb(26, 182, 39)")'>点击设置</strong>
              </li>
            <li style="color:rgb(27, 29, 29)">
              <span>永恒不朽的黑色</span>
              <strong @click = 'change("rgb(27, 29, 29)")'>点击设置</strong>
            </li>
            <li style="color:rgb(31, 7, 109)">
              <span>傻不啦叽的颜色呢</span>
              <strong @click = 'change("rgb(31, 7, 109)")'>点击设置</strong>
            </li>
            <li style="color:rgb(209, 197, 23)">
              <span>让你不知所措的颜色呢</span>
              <strong @click = 'change("rgb(209, 197, 23)")'>点击设置</strong>
            </li>
            <li style="color:rgb(70, 65, 5)">
              <span>不如就喝个原味的咖啡吧</span>
              <strong @click = 'change("rgb(70, 65, 5)")'>点击设置</strong>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  data(){
    return {
      
    }
  },
  methods:{
    change(color){
      this.$root.bgcolor = color
    }
  }
}
</script>
<style>
    /* html{background:#00f} */
    .newsListcolor{width:6.4rem; ;}
    .newsListcolor .box{
      padding:0.5rem 0.4rem 0;
      color:rgb(0, 0, 0);
      font-size: 0.4rem
    }
    .newsListcolor .box b{
      display: block;
      text-align: right;
      margin-top:0.1rem
    }

    .newsListcolor ul{ padding:0.3rem 0.4rem 0;font-size: 0.3rem}
    .newsListcolor ul li{padding:0.2rem 0 0.1rem 0; border-bottom:1px dashed #ccc;display:flex;justify-content: space-between;}
    .newsListcolor ul li img{width: 1rem;height: 1rem;}
    .newsListcolor{clear: both;margin-bottom:1rem;}
</style>

