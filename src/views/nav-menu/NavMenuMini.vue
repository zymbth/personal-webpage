<!-- 顶部导航菜单 -->
<template>
  <div>
		<el-menu
			:default-active="pageIndex"
			text-color="#304156"
			:active-text-color="$store.state.theme"
			@select="handleSelect">

		  <el-menu-item index="1">
		    <!--<i class="el-icon-document"></i>-->
		    {{$t('pages.cover')}}
		  </el-menu-item>
		  <el-menu-item index="2">{{$t('pages.about')}}</el-menu-item>
		  <el-menu-item index="3">{{$t('pages.page2')}}</el-menu-item>
		  <el-menu-item index="4">{{$t('pages.career')}}</el-menu-item>
		  <el-menu-item index="5">{{$t('pages.page3')}}</el-menu-item>
		  <el-menu-item index="6">{{$t('pages.blog')}}</el-menu-item>
		  <!--<el-menu-item index="lang">
		  	<div class="el-item-box">
			    <lang-picker></lang-picker>
			  </div>
		  </el-menu-item>
		  <el-menu-item index="style">
		  	<div class="el-item-box">
			    <theme-picker></theme-picker>
			  </div>
		  </el-menu-item>-->
			  <div class="el-item-box">
			    <lang-picker></lang-picker>
			  </div>
			  <div class="el-item-box">
			    <theme-picker></theme-picker>
			  </div>
		</el-menu>
  </div>
</template>

<script>
import LangPicker from "@/components/lang-picker/index.vue"; //语言选择插件
import ThemePicker from "@/components/theme-picker/index.vue"; //主题选择插件

export default {
  components: {
    LangPicker,
    ThemePicker
  },
  props: {
    pageIndex: {
      type: String,
      default: "1"
    }
  },
  data() {
    return {
    	isCollapse: false,
    };
  },
  methods: {
    //当前点击的选项
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      this.$emit("selectChange", key); //向外触发选项改变事件, key是选项序号
    },
    handleOpen(key, keyPath) {
	    console.log(key, keyPath);
	  },
	  handleClose(key, keyPath) {
	    console.log(key, keyPath);
	  },
  },
};
</script>

<style lang='scss' scoped>
$nav-height: 40px;
$nav-bgColor:  rgba($color: #ffffff, $alpha: 1);

.nav-menu {
  position: fixed;
  top: 0;
  width: 100%;
  height: $nav-height;
  background: $nav-bgColor;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .el-menu-item {
    padding: 0 3%;
    height: $nav-height;
    line-height: $nav-height;
  }
  .el-item-box {
    margin: 1%; 
    color: #304156;
  }
}
.el-menu--horizontal {
  border-bottom: 0 !important;
}

.el-menu-item:not(.is-disabled):focus, .el-menu-item:not(.is-disabled):hover, .el-submenu__title:hover {
    background-color: $nav-bgColor;
}
</style>
