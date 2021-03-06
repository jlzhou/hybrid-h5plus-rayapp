/**
 * 作者: dailc
 * 时间: 2016-05-24 
 * 描述:  说明页面
 */
define(function(require, exports, module) {
    "use strict";
    //每一个页面都要引入的工具类
	var CommonTools = require('CommonTools_Core');
	//每一个页面都要引入的工具类
	// initready 要在所有变量初始化做完毕后
	CommonTools.initReady(initData);
	/**
	 * @description 初始化数据,结合initReady使用
	 * plus情况为plusready
	 * 其它情况为直接初始化
	 */
	function initData() {
		//引入必备文件,下拉刷新依赖于mui与mustache
		CommonTools.importFile([
			'js/libs/mui.min.js'
		], function() {
		});
	} 
});