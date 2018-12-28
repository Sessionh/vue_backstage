<template>
    <div class="box">
      <div class="triangle">
      </div>
      <ul>
        <li v-for="item in butList" :key="item.id" @click="butClick(item.id)">
          <div class="but">
            <div class="icon"><i class="iconfont" v-html=" item.icon"></i></div>
            <div class="title">{{item.title}}</div>
          </div>
        </li>
        
      </ul>

    </div>
</template>
<script>
export default {
  name: 'msgTab',
  props: {
    butList: {
      type: Array,
    }
    
  },
  data() {
    return {
      // butList: [
      //   {
      //     id: 1,
      //     title: '我的主页',
      //     icon: '&#xe686;'
      //   },
      //   {
      //     id: 2,
      //     title: '退出登陆',
      //     icon: '&#xe668;'
      //   },
      // ]
    }
  },
  methods: {
    butClick(id) {
      this.$emit('butClick', id);

    }
  }
}
</script>
<style lang="less">
.box {
  width: 120px;
  // height: 100px;
  border-radius: 10px;
  background: white;
  position: relative;
  padding: 10px;
  
  .triangle {
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 8px solid white;
    position: absolute;
    top: -8px;
    left: 50px;
    

  }
    ul {
      list-style: none;
      margin-top: 10px;
      li {
        .but {
          display: flex;
          margin-bottom: 5px;
          cursor: pointer;
          color: #176694;
          .title {
            padding: 2px 0 0 6px;

          }
          .icon {
            padding-left: 5px; 

          }

        }

        .but:hover {
          color: #29a3e9;
        }
      }
      
    }

}
</style>


