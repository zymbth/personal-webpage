<!-- 主页 -->
<template>
	<div class="plus-index">
		<el-page-header @back="goHome" title="主页" content="" style="margin:20px"></el-page-header>
		<my-works></my-works>
		<my-plugs></my-plugs>
		<my-notes></my-notes>
	</div>
</template>

<script>
import MyWorks from "@/views/plus/works/index.vue";
import MyPlugs from "@/views/plus/plugs/index.vue";
import MyNotes from "@/views/plus/notes/index.vue";

export default {
  components: {
  	MyWorks,
  	MyPlugs,
  	MyNotes
  },
  data() {
    return {
    };
  },
  mounted() {},
  methods: {
  	goHome() {
  		history.go(-1);
//		this.$router.push("/");
  	},
  },
  watch: {
	},
  computed: {
	},
};
</script>

<style lang='scss' scoped>
.plus-index {
	padding: 0;
	height: 100%;
}
</style>
