<!-- 第3页 -->
<template>
	<div id="page-three">
		<div class="container-1">
			<div class="catalog-container" title="我的空间" @click="goTo('plus')">
				<img style="width: 100%; height: 100%" src="./img/myspace.png"></img>
			</div>
			<div class="catalog-container" title="笔记" @click="goTo('notes')">
				<img style="width: 100%; height: 100%" src="./img/notes.png"></img>
			</div>
			<div class="catalog-container" title="作品" @click="goTo('works')">
				<img style="width: 100%; height: 100%" src="./img/works.png"></img>
			</div>
			<div class="catalog-container" title="插件" @click="goTo('plugs')">
				<img style="width: 100%; height: 100%" src="./img/plugs.png"></img>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	components: {},
	data() {
		return {};
	},
	mounted() {},
	methods: {
		goTo(routeName) {
			this.$router.push({name: routeName});
		},
	}
};
</script>

<style lang='scss' scoped>
@keyframes test {
	0% {transform: translateX(0);}
	100% {transform: translateX(40);}
}
/*@keyframes inblockAnimation {
	0% {border-radius: 10px 0;}
	100% {border-radius: 0 10px;}
}
@keyframes outblockAnimation {
	0% {border-radius: 0 10px;}
	100% {border-radius: 10px 0;}
}*/
#page-three {
	/*padding: 50px 80px;*/
	background-color: rgba(0,0,0,0);
	/*background: url(../../assets/img/bg4.jpg) no-repeat;*/
	background: url(https://ymzhao-oss.oss-cn-hangzhou.aliyuncs.com/webapp/bg4.jpg) no-repeat;
	background-position: center;
	background-attachment: fixed;
	background-size:cover;
}
.container-1 {
	background-color: #0078ff50;
	min-height: 400px;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
}
.catalog-container {
	cursor: pointer;
	height: 80px;
	width: 80px;
	padding: 20px;
	margin: 0 50px;
    color: #fff;
    box-sizing: border-box;
	background-color: #16a085;
	border-radius: 10px 0;
	/*animation: borderAnimation 2s 1 ease;*/
}
</style>