import inputSearch from './input_search';
import tabChange from './tab_change';

const components = {
  install: function(Vue) {
    Vue.component('InputSearch', inputSearch)
    Vue.component('TabChange', tabChange)
  }
}

export default components;