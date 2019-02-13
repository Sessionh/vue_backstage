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
            <i class="iconfont icon" v-html=" '&#xe653;'"></i>
            <span class="title">锁屏</span>
          </div>

          <div class="icon_flex" @click="iconClick(3)">
            <i class="iconfont icon" v-html=" '&#xe659;'"></i>
            <span class="title">个人中心</span>
          </div>
        </div>
        <div class="user"  @mouseenter="mouseEnterUser" @mouseleave="mouseleaveUser">
          <div class="user_context">
             <img  class="img" src="./images/logo.jpg"/>
            <div class="nameIcon">
              <div class="name">admin</div>
              <div class="icon">
                <Icon  type="md-arrow-dropdown" />
              </div>
            
            </div>

            <div class="message"  :style="{transform: `scale(${tranValue})`, opacity: opacity }">
              <msgTab :butList="butList" @butClick="butClick"/>
            </div>

          </div>
         
         

        </div>


      </div>

      <div class="content">
        <div class="content_menu" :style="{width: (menuWidth + 'px')}">
          <div class="change_home">
            <div class="iconfont icon" v-html=" '&#xe741;'" :style="{transform: `rotate(${rotateHome}deg)`}" @click="onChangeHome"></div>
          </div>
          <menuList/>
          

        </div>
        <div class="content_router" :style="{width: `calc(100% - ${menuWidth})`}">
          <form action="http://192.168.10.107/cgi-bin/ppp.cgi" method="post" target="_blank">
            <input type="submit" value="Submit" />
          </form>

        </div>

      </div>

    </div>
    
  </div>
</template>
<script>
import msgTab from '@/components/msg_tab.vue';
import menuList from '@/components/menu_list.vue';
export default {
  name: 'app',
  components: {
    msgTab,
    menuList,
  },
  data () {
    return {
      menuWidth: 210,
      msgShow: false,
      tranValue: 0.6,
      opacity: 0,
      rotateHome: 0,
      butList: [
        {
          id: 1,
          title: '我的主页',
          icon: '&#xe686;'
        },
        {
          id: 2,
          title: '退出登陆',
          icon: '&#xe668;'
        },
      ]

    }
  },
  methods: {
    iconClick(id) {
      console.log(id);
      // let data  ={
      //   user_name: 'root ',
      //   user_password: 'htnice',
      // }
      // this.$http.post('/cgi-bin/ppp.cgi').then(res => {
      //   console.log(11);
      //   console.log(res);
      //   // window.location.href = res;
      // })

      function Send(url, callback) {
        var xhr = new XMLHttpRequest();      
        xhr.onreadystatechange = function () {
          if (xhr.readyState == 4) {
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) //200:Success.304:Tell browser to read cache.
            {                        
              if (callback === undefined || callback === null) {
                return;
              }
              callback(xhr.responseText);
            }
            else {
              alert(xhr.responseText);
            }
          }
        }       
        xhr.open("post", url, true);
        xhr.send(null);
      }
      function Request() {           
        var url = "/cgi-bin/ppp.cgi?Data=Hello";
        Send(url,function (e) {
          alert(e);
        });
      }
      Request();

      // $.ajax({
      //   type:"POST",
      //   url:'cgi-bin/ppp.cgi',
      //   // data:'user_name='+vUser+'&user_password='+vPwd,
      //   success:function (data){
      //     console.log(data);
      //   },
      //   error: (res) => {
      //     console.log(res);

      //   }
        

      // });
      

    },
    mouseEnterUser() {
      this.tranValue = 1;
      this.opacity = 1;
    },
    mouseleaveUser() {
      this.tranValue = 0.6;
      this.opacity = 0;
    },
    butClick(id) {
      console.log(id);
    

    },
    onChangeHome() {
      // this.rotateHome = this.rotateHome === 0 ? 180 : 0;
      if (this.rotateHome === 0) {
        this.rotateHome = 180;
        this.menuWidth  = 80;
      } else {
        this.rotateHome = 0;
        this.menuWidth  = 210;
      }

    }
  }
}
</script>


<style lang="less" scoped>
@import './app.less';
</style>
