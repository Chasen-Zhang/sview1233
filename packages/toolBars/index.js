import ToolBars from './src/main';
ToolBars.install = function(Vue) {
  Vue.component(ToolBars.name, ToolBars);
};

export default ToolBars;