<template>
    <div class="menu">
        <ul class="menu_one">
            <li >
               <div class="menu_one_title" @click="menuOneClick">
                 <div class="menu_one_t">一级菜单1</div>
                 <div class="menu_one_icon">
                   <i class="iconfont icon" v-html="'&#xe65e;'"></i>
                 </div>
                 
                </div> 
                <ul class="menu_two">
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
           <li >
               <div class="menu_one_title" @click="menuOneClick">
                 <div class="menu_oneT">一级菜单1</div>
                 <div >
                   <i class="iconfont icon" v-html="'&#xe65e;'"></i>
                 </div>
                 
                </div> 
                <ul class="menu_two">
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

    }
  },
  methods: {
    menuOneClick() {

    }

  }
    
}
</script>
<style lang="less" scoped>
.menu {
    color: white;
    .menu_one {
      width: auto;
      .menu_one_title {
        cursor: pointer;
        display: flex;
        .icon {
          font-size: 12px;
          font-weight: 700;
        }
        .menu_one_t {
          padding: 5px 0;
        }
        .menu_one_icon {
          margin-right: 0px;
        }

      }

      .menu_two {
        // padding: 5px 0 5px 10px;
        .content {
          // width: 160px;
          padding: 10px 0 10px 20px;
          margin: 2px 0;
          
          border-radius: 5px;


        }
        .content:hover {
          background: gold;
          cursor: pointer;

        }
      }
    }
}
</style>


