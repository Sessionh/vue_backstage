import addURL from './addTemplate.js';

let util = {

};

util.getRouterChildren = function(vm) {
  let str = [];
  let menu = [{
    path: '/',
    name: 'home',
    component: addURL('main'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'homeMain',
        component: addURL('mainComponents/homeMain')
      }
    ]
  }];
  let error = [{
    path: '/error404',
    name: 'error404',
    component: addURL('mainComponents/error/404')
  }];
  vm.$http.post('menu', {}).then(res => {
    console.log(res.data);
    let menuList = res.data;
    sessionStorage.setItem('menu', JSON.stringify(res.data));
    vm.$store.commit('setMenu', res.data);
    menuList.forEach(res => {
      if (res.children instanceof Array && res.children.length > 0) {
        res.children.forEach(menu => {
          if (menu.children instanceof Array && res.children.length > 0) {
            menu.children.forEach (menuSub => {
              str.push(
                {
                  path: menuSub.path,
                  name: menuSub.name,
                  meta: {
                    title: menuSub.title
                  },
                  component: addURL(menuSub.component)
                }
              )

            })
          } else {
            str.push(
              {
                path: menu.path,
                name: menu.name,
                meta: {
                  title: menu.title
                },
                component: addURL(menu.component)
              }
            )
          }
        })
      }
           
    });
    menu[0].children.push(...str); // 添加首页
    console.log(menu)
    vm.$store.commit('updateDefaultRouter', menu); // 动态加入菜单
    vm.$store.commit('updateRouter', error); // 动态加入404页面
    const checkedTag = sessionStorage.getItem('checkedTag') // 选择的标签
    const  activeName = sessionStorage.getItem('activeName') // 选中的菜单项
    let  openNames = sessionStorage.getItem('openNames') // 展开的菜单
    if (activeName !== null) {
           
      vm.$store.commit('setActiveName', activeName);

    }
    if (openNames !== null) {
      let openNamesList = openNames.split(',')
      vm.$store.commit('setAllOpenNames', openNamesList);
    }
      
       
    if (checkedTag !== null) {
      vm.$store.commit('setCheckedTag', checkedTag);
      vm.$router.push({
        name: checkedTag
      })
    } else {
      vm.$router.push({ // 调转首页
        name: 'home'
      });

    }
        
  });
};
// 深拷贝
util.copy = function deepCopy(val1, newData) {
  let str = newData

  for (let name in val1) {
    if (typeof val1[name] === 'object') {
      // str[name] = (val1[name].constructor === Array)? []:{};
         
      str[name] = (val1[name] instanceof Array)? []:{};
          
      deepCopy(val1[name], str[name])

    } else {
      str[name] = val1[name]
    }
  }
  return str

}

// 日期转换
util.formatDate = function(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };

  // 遍历这个对象
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};

function padLeftZero (str) {
  return ('00' + str).substr(str.length);
}
export default util;