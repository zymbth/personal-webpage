<template>
	<div id="app" v-if="isShow">
		<router-view/>
	</div>
</template>

<script>
export default {
    data(){
      return{
        "isShow": false //是否显示内容
      }
    },
    //如果加载完成, 移除index.html的加载动画, 显示vue挂载的内容
    beforeCreate(){
      setTimeout(() =>{
    let loadingBox = document.getElementById("init-loading-div");
    if(loadingBox != null){
      document.body.removeChild(loadingBox);
    }
    this.isShow = true; //显示vue挂载的内容
      }, 500);
    }
}
</script>

<style>
#app {
  font-family: "PingFang SC","Helvetica Neue",Helvetica,"Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

/* 默认文字颜色 */
.default-text-color{
  color: #304156;
}

/* 覆盖折叠面板的'>'图标默认样式, 隐藏 */ 
.el-collapse-item__arrow{
  width: 0;
  height: 0;
  visibility: hidden;
  /* opacity: 0; */
}
.el-collapse-item__wrap {
	border-bottom: 0px !important;
	background-color: rgba(0,0,0,0) !important;
}
.el-collapse-item__header {
	background-color: rgba(0,0,0,0) !important;
}
.page-title {
	margin: 0 auto 0.5rem;
	text-align: center;
	font-size: 3rem;
	font-weight: bold;
	text-transform: uppercase;
}
.page-desc {
	margin: 0 auto 1rem;
	text-align: center;
	color: #4e4e4e;
}
.page-two .el-avatar>img {
	width: 100%;
	height: auto;
}
</style>
