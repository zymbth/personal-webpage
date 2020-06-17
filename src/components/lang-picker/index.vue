<!-- 语言选择组件 -->
<template>
  <div style="z-index: 3000;">
    <!-- 语言选择下拉选框 -->
    <el-dropdown @command="handLanguageCommand">
      <div class="el-dropdown-link default-text-color">
      	<img class="lang-icon" src="../../views/nav-menu/img/langs.png"/>
      	<span>{{$t('lang.language')}}</span>
      </div>
      <el-dropdown-menu slot="dropdown" style="z-index: 3000;">
        <el-dropdown-item command="cn">
        	<img class="lang-icon" src="../../views/nav-menu/img/Chinese.png" />
        	<span>中文</span>
        </el-dropdown-item>
        <el-dropdown-item command="en">
        	<img class="lang-icon" src="../../views/nav-menu/img/English.png" />
        	<span>English</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handLanguageCommand(language) {
      //语言选择函数,更改语言值'cn'或'en'
      this.$store.commit("setLang", language); //保存语言设置
      this.$i18n.locale = language; //切换语言
    }
  }
};
</script>

<style lang='scss' scoped>
	.lang-icon {
		display: inline-block;
		height: 25px;
		width: 25px;
		vertical-align: middle;
	}
	.lang-icon + span {
		vertical-align: middle;
	}
</style>