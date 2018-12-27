import router from '@/router/router.js'
const app = {
  state: {
    activeName: '', // 当前选择菜单

  },
  mutations: {
    // 动态添加全局路由
    updateDefaultRouter (state, routes) {
      //   router.addRoutes(routes);
      state.menuRouter = routes;
      router.addRoutes(routes)
      
    },
    // 动态添加路由 不保存
    updateRouter (state,routes) {
      router.addRoutes(routes)
      console.log(44)
    },
    // 添加菜单
    setMenu (state, value) {
      state.menuList = value

    }
  },
  actions: {
    // setRoutePageName (context, to) {
    //   if (to.name !== context.state.checkedTag) {
    //     context.state.checkedTag = to.name
      
    //   }
    // }
  }
}

export default app;