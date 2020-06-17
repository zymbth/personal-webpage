<!-- 主页 -->
<template>
  <div class="plus-notes">
  	<h3>笔记</h3>
		<el-collapse v-model="activeName" accordion>
			<el-collapse-item v-for="(note, idx) in notes" :title="note.title" key="idx">
				<p>{{note.descr}}</p>
				<router-link :to="{name:note.pathName}">查看详情</router-link>
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
    	notes: []
    };
  },
  created() {
  	this.notes = [{
  		title: '隐藏垂直滚动条',
  		descr: '简单HTML实现隐藏垂直滚动条，无需插件',
  		pathName: 'hideScrollBar'
  	}]
  },
  mounted() {},
  methods: {},
};
</script>

<style lang='scss' scoped>
	.plus-notes {
		width: 100%;
		padding: 20px;
		box-sizing: border-box;
		/*text-align: left;*/
	}
</style>
