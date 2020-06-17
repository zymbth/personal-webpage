<!-- 主页 -->
<template>
  <div class="plus-plugs">
  	<h3>插件</h3>
  	<el-collapse v-model="activeName" accordion>
			<el-collapse-item v-for="(plug, idx) in plugs" :title="plug.title" key="idx">
				<p>{{plug.descr}}</p>
				<router-link :to="{name:plug.pathName}">查看详情</router-link>
			</el-collapse-item>
		</el-collapse>
		
  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {
    	activeName: '1',
    	plugs: [],
    };
  },
  created() {
  	this.plugs = [{
  		title: '[ElementUI]可过滤树节点',
  		descr: '通过关键字过滤树节点',
  		pathName: 'filterableTree'
  	}]
  },
  mounted() {},
  methods: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
	.plus-plugs {
		box-sizing: border-box;
		width: 100%;
		padding: 20px;
	}
	.tree-wrapper {
		position: relative;
		overflow: hidden;
		height: 150px;
		.filter-tree {
			overflow-x: hidden;
			overflow-y: scroll;
			width: calc(100% + 17px);
			height: 100%;
			position: absolute;
			left: 0;
			top: 0;
		}
	}
</style>
