<!-- 主页 -->
<template>
  <div class="plug-container">
  	<h3>插件</h3>
		<el-input placeholder="输入关键字进行过滤" v-model="filterText">
		</el-input>
		
		<div class="tree-wrapper">
			<el-tree
			  class="filter-tree"
			  :data="data"
			  :props="defaultProps"
			  default-expand-all
			  :filter-node-method="filterNode"
			  ref="tree">
			</el-tree>
		</div>
  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {
    	filterText: '',
    	data: [],
    	defaultProps: {
    		children: 'children',
    		label: 'label'
    	}
    };
  },
  created() {
  	this.data = [{
  		id: 1,
  		label: '一级 1',
  		children: [{
  			id: 4,
  			label: '二级 1-1',
  			children: [{
  				id: 9,
  				label: '三级 1-1-1'
  			},{
  				id: 10,
  				label: '三级 1-1-2'
  			}]
  		}]
  	},{
  		id: 2,
  		label: '一级 2',
  		children: [{
  			id: 5,
  			label: '二级 2-1'
  		},{
  			id: 6,
  			label: '二级 2-2'
  		}]
  	},{
  		id: 3,
  		label: '一级 3-1',
  		children: [{
  			id: 7,
  			label: '二级 3-1'
  		},{
  			id: 8,
  			label: '二级 3-2'
  		}]
  	}]
  },
  mounted() {
	},
  methods: {
  	filterNode(value, data) {
	    if (!value) return true;
	    return data.label.indexOf(value) !== -1;
	  }
  },
  watch: {
  	filterText(val) {
	    this.$refs.tree.filter(val);
	  }
	},
};
</script>

<style lang='scss' scoped>
	.plug-container {
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
