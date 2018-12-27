<template>
  <div class="app">
    <div class="main">
      <div class="header">
        <div class="logo">
          LOGO
        </div>
        <div class="icons">
          <div class="icon_flex" @click="iconClick(1)">
            <i class="iconfont icon" v-html=" '&#xe679;'"></i>
            <span class="title">消息</span>
          </div>
          <div class="icon_flex" @click="iconClick(2)">
            <i class="iconfont icon" v-html=" '&#xe637;'"></i>
            <span class="title">锁屏</span>
          </div>

          <div class="icon_flex" @click="iconClick(3)">
            <i class="iconfont icon" v-html=" '&#xe659;'"></i>
            <span class="title">个人中心</span>
          </div>
        </div>
        <div>

        </div>


      </div>
      <div class="context">

      </div>

    </div>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {

    }
  },
  methods: {
    iconClick(id) {
      console.log(id);

    }
  }
}
</script>


<style lang="less" scoped>
.app {
  background: url('./images/back_image3.jpg');
  background-size: 100% 100%; 
  height: 100vh;
  width: 100vm;

  .main {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.35);
    .header {
      height: 80px;
      background: rgba(0, 0, 0, 0.6);
      position: relative;
      .logo {
        position: absolute;
        left: 10px;
        top: 25%;
        color: #29a3e9;
        font-size: 30px;
        font-weight: 600;
        
      }
      .icons {
        position: absolute;
        right: 100px;
        top: calc(25% + 8px);
        width: 280px;
        color: #f5efef;
        display: flex;
        .icon {
          font-weight: 900;
          font-size: 16px;
         }
         .icon_flex {
           padding: 0 20px 0 10px;
           cursor: pointer;
           .title {
             padding: 0 3px;
             font-size: 14px;
             font-weight: 400;
           }
         }
         .icon_flex:hover {
           color: #29a3e9;
         }
        
      }
    }

  }
}
</style>
