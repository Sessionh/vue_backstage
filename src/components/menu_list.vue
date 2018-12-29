<template>
    <div class="menu">
        <ul class="menu_one">
            <li >
               <div class="menu_one_title" @click="menuOneClick(1)">
                  <div class="menu_one_t">一级菜单1</div>
                  <div class="menu_one_icon">
                    <i class="iconfont icon" v-html="'&#xe65e;'"></i>
                  </div>
                 
                </div> 
                <ul v-show="menuOpen.indexOf(1) >= 0" class="menu_two">
                    <li>
                      <div class="content" @click="subMenuClick('user')" :style="{background: actionName === 'user' ? '' : 'linear-gradient(to bottom  right, #2727ce, #0879bb)'}">
                        2级菜单-1
                      </div>
                        
                    </li>
                    <li>
                        <div class="content" @click="subMenuClick('role')" :style="{background: actionName === 'role' ? '' : 'linear-gradient(to bottom  right, #2727ce, #0879bb)'}">
                         2级菜单-2
                      </div>
                    </li>
                </ul>

            </li>
           <li >
               <div class="menu_one_title" @click="menuOneClick(2)">
                  <div class="menu_one_t">一级菜单1</div>
                  <div class="menu_one_icon">
                    <i class="iconfont icon" v-html="'&#xe65e;'"></i>
                  </div>
                 
                </div> 
                <ul v-show="menuOpen.indexOf(2) >= 0" class="menu_two">
                    <li>
                      <div class="content">
                        2级菜单-1
                      </div>
                        
                    </li>
                     <li>
                        <div class="content">
                         2级菜单-2
                      </div>
                    </li>
                </ul>

            </li>
         
        </ul>

    </div>
</template>
<script>
export default {
  name: 'menu_list',
  data() {
    return {
      menuOpen: [],
      // actionName: '',

    }
  },
  computed: {
    actionName() {
      return '';

    }

  },
  methods: {
    menuOneClick(id) {
      if (this.menuOpen.indexOf(id) >= 0) {
        this.menuOpen.splice(this.menuOpen.indexOf(id), 1);
      } else {
        this.menuOpen.push(id)
      }

    },
    subMenuClick(val) {
      this.actionName = val;

    }

  }
    
}
</script>
<style lang="less" scoped>
.menu {
    color: white;
    
    .menu_one {
      width: auto;
      user-select: none;
      .menu_one_title {
        cursor: pointer;
        position: relative;
        height: 30px;
        .icon {
          font-size: 12px;
          font-weight: 700;
          user-select: none;
        }
        .menu_one_t {
          padding: 5px 0;
        }
        .menu_one_icon {
          margin-right: 0px;
          position: absolute;
          right: 5px;
          top: 5px;
        }
       

      }

      .menu_two {
        // padding: 5px 0 5px 10px;
        .content {
          // width: 160px;
          padding: 10px 0 10px 20px;
          margin: 2px 2px 2px 0;
          
          border-radius: 5px;


        }
        .content:hover {
          background: linear-gradient(to bottom  right, #2727ce, #0879bb);
          cursor: pointer;

        }
      }
    }
}
</style>


