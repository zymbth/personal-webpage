// import Vue from 'vue'
// import VueRouter from 'vue-router'
const _import = file => () =>
	import('@/views/' + file + '.vue');
//component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')

// Vue.use(VueRouter)

  const routes = [
  {
	  path: '/',
	  name: 'home',
	  component: _import('Home')
	},
	{
		path: '/plus',
		name: 'plus',
		component: _import('plus/index'),
	},
	{
		path: '/plus/note',
		name: 'notes',
		component: _import('plus/notes/index'),
	},
	{
		path: '/plus/note/hideScrollBar',
		name: 'hideScrollBar',
		component: _import('plus/notes/hideScrollBar')
	},
	
	{
		path: '/plus/works',
		name: 'works',
		component: _import('plus/works/index'),
	},
	{
		path: '/plus/works/bmap',
		name: 'bmap',
		component: _import('plus/works/bmap')
	},
	{
		path: '/plus/works/h5video',
		name: 'h5video',
		component: _import('plus/works/h5video')
	},
	/* {
		path: '/plus/works/excelT',
		name: 'excelAndTable',
		component: _import('plus/works/tables/excelT')
	},
	{
		path: '/plus/works/editable-table',
		name: 'editableTable',
		component: _import('plus/works/tables/editableTable')
	}, */
	/* {
		path: '/plus/works/three-level-slide',
		name: 'threeLevSlide',
		component: _import('plus/works/threeLevSlide')
	}, */
	
	{
		path: '/plus/plugs',
		name: 'plugs',
		component: _import('plus/plugs/index'),
	},
	{
		path: '/plus/plugs/filterable-tree',
		name: 'filterableTree',
		component: _import('plus/plugs/filterableTree')
	}
]

const router = new VueRouter({
  routes
})

export default router
