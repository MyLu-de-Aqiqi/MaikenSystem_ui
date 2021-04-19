/* eslint-disable */

// 一个菜单可以包括的所有属性 
// {
// 	id: '12345',		// 菜单id, 必须唯一
// 	name: '用户中心',		// 菜单名称, 同时也是tab选项卡上显示的名称
// 	icon: 'el-icon-user',	// 菜单图标, 参考地址:  https://element.eleme.cn/#/zh-CN/component/icon
// 	info: '管理所有用户',	// 菜单介绍, 在菜单预览和分配权限时会有显示 
// 	view:  () => import('@/sa-view/user/user-list.vue'),	// 指向的视图 
//	params: {},					// 视图参数  
// 	url: 'sa-html/user/user-list.html',	// 菜单指向地址, 用iframe打开它 (配置后,view属性失效)
// 	is_blank: false,		// 如果指定了url, 此属性决定是否从新窗口打开 
// 	is_show: true,			// 是否显示, 默认true 
// 	childList: [			// 指定这个菜单所有的子菜单, 子菜单可以继续指定子菜单, 至多支持三级菜单
// 		// .... 
// 	],
// 	click: function(sa_admin, sa) {		// 配置一个函数,  点击菜单时, 会执行这个函数 
// 		console.log(sa);
// 	}
// }


/* 菜单集合 */
// 判断是否有那个东西，如果没有，就弹出登陆界面


export default [
	{
		id: '1',
		name: '进货管理模块',
		icon: 'el-icon-shopping-cart-full',
		info: '进货管理模块',
		checked: true,
		childList: [
			{id: '2', name: '进货管理',checked: true, view: () => import('@/sa-view/purchase/purchase-list.vue')},
			{id: '12', name: '库存管理',checked: true, view: () => import('@/sa-view/stock/stock-list.vue')}
		]
	},
	{
		id: '25',
		name: '财务管理',
		icon: 'el-icon-coin',
		info: '财务管理',
		checked: true,
		childList: [
			{id: '26', name: '账目管理',checked: true, view: () => import('@/sa-view/financial/financial-list.vue')}
		]
	},
	{
		id: '3',
		name: '销售订单管理',
		icon: 'el-icon-goods',
		info: '销售订单管理',
		checked: true,
		childList: [
			{id: '4', name: '销售订单查看',checked: true, view: () => import('@/sa-view/saleorder/sale-order-list.vue')}
		]
	},
	// {
	// 	id: '13',
	// 	name: '各种示例',
	// 	icon: 'el-icon-search',
	// 	info: '增删改查各种常用组件示例',
	// 	childList: [
	// 		{id: '14', name: '查询参数示例', view: () => import('@/sa-view/case/query-p-case.vue')},
	// 		{id: '15', name: '表格显示示例', view: () => import('@/sa-view/case/query-table-case.vue')},
	// 		{id: '16', name: '表单提交示例', view: () => import('@/sa-view/case/submit-form.vue')}
	// 	]
	// },
	// {
	// 	id: '17',
	// 	name: '首页设置',
	// 	icon: 'el-icon-table-lamp',
	// 	info: '首页的一些设置',
	// 	childList: [
	// 		{id: '18', name: '轮播图设置', view: () => import('@/sa-view/home/swiper-list.vue')}
	// 	]
	// },
	{
		id: '19',
		name: '权限控制',
		icon: 'el-icon-unlock',
		info: '对系统角色权限的分配等设计，敏感度较高，请谨慎授权',
		checked: true,
		childList: [
			{id: '20', name: '角色列表',checked: true, view: () => import('@/sa-view/role/role-list.vue') },
			// {id: '21', name: '菜单预览', view: () => import('@/sa-view/role/menu-list.vue') }
		]
	},
	{
		id: '22',
		name: '用户管理',
		icon: 'el-icon-user',
		info: '对用户列表、添加、统计等等...',
		checked: true,
		childList: [
			{id: '23', name: '用户列表',checked: true, view: () => import('@/sa-view/user/user-list.vue')  },
			// {id: '24', name: '用户添加', view: () => import('@/sa-view/user/user-add.vue'), params: {username: '王铁汉'} },
		],
		
		// let template = '<div class="iframe-view-box"><iframe class="iframe-view" src="' + menu.url + '"></iframe></div>';
		// menu.view = ()=> ({template: template});
		
	},
	{
		id: '6',
		name: '文章管理',
		icon: 'el-icon-document-copy',
		info: '对文章的增删改查、维护',
		childList: [
			{id: '6-1', name: '文章列表', view: () => import('@/sa-view/article/art-list.vue') },
		]
	},
	//  ========= 示例 指定一个函数, 点击菜单时执行这个函数 ================
	{
		id: '7',
		name: '系统设置',
		icon: 'el-icon-setting',
		childList: [
			{id: '7-1', name: '登录页', click: function(sa_admin, sa) {	// 点击这个菜单时将执行这个函数 
				sa_admin.openLogin();	// 打开登录页面
			}},
			{id: '7-2', name: '403无权限', click: function(sa_admin) {	
				sa_admin.open403();	// 打开403页面 
			}},
			{id: '7-3', name: '404未找到', click: function(sa_admin) {
				sa_admin.open404();	// 打开404页面 
			}},
			{id: '7-10', name: '500有错误', click: function(sa_admin) {
				sa_admin.open500();	// 打开500页面 
			}},
			{id: '7-11', name: '服务器设置', view: () => import('@/sa-view/cfg/system-cfg.vue')  },
		]
	},
	//  ========= 示例 外部链接 点击从新窗口打开 ================
	{
		id: '8',
		name: '外部链接',
		icon: 'el-icon-link',
		info: '示例：外部链接',
		childList: [
			{id: '8-1', name: '百度一下', url: 'https://www.baidu.com/', is_blank: true},
			{id: '8-6', name: '颜值排行榜', url: 'http://yanzhi21.com/', is_blank: true},
			{id: '8-7', name: 'jq22插件库', url: 'http://www.jq22.com/', is_blank: true},
			{id: '8-2', name: 'uni-app', url: 'https://uniapp.dcloud.io/', is_blank: true},
			{id: '8-11', name: 'sa-admin-iframe版', url: 'http://sa-admin.dev33.cn/', is_blank: true},
			{id: '8-3', name: 'sa-token', url: 'http://sa-token.dev33.cn/',},	// iframe打开
			{id: '8-4', name: 'SqlFly', url: 'https://sqlfly.dev33.cn/',},		// iframe打开
		]
	},
	{
		id: '9',
		name: '一个隐藏菜单',
		view: () => import('@/sa-view/role/role-list.vue'),
		is_show: false// 隐藏
	},
	{id: '1-11', name: '在线论坛', url: 'http://applist.dev33.cn/applist-admin/html/ser-comment/w-list.html?sid=4nqjfqbyw6fh', is_show: false},
	
	
	
]

