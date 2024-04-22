var path = require('path');
var bourbon = require('node-bourbon');

function includePaths() {
  // 使用 bourbon.with() 函数来获取路径
  return bourbon.with();
}

module.exports = {

  // 在模块被引入时调用 includePaths 函数
  includePaths: includePaths,

  // with 函数接收一个参数数组
  with: function(paths) {
    // 将 includePaths() 返回的路径和传入的路径数组合并
    return includePaths().concat(paths);
  }

};
