<!-- 主页 -->
<template>
  <div class="slide-content">
  	<van-row style="height: 100%;">
  		<!--type-1-->
		  <van-col span="6" class="slide-left">
		  	<div class="wrapper-scroll-type1">
		  		<van-list class="type1-list">
					  <van-cell v-for="i in 25" :key="i" :class="'ele-'+i">
					  	type_{{i}}
					  </van-cell>
					</van-list>
		  	</div>
		  </van-col>
		  <van-col span="18" class="slide-right">
		  	<!--type-2-->
		  	<div class="wrapper-scroll-type2">
	  			<div style="white-space:nowrap;" class="type2-list">
	  				<van-button v-for="i in 10" :key="i" type="primary" size="mini">按钮{{i}}</van-button>
	  			</div>
  			</div>
		  	<!--goods-->
		  	<iscroll-view
		  		class="scroll-view goods"
		  		ref="goods"
		  		:options="{preventDefault: false}"
		  		>
		  		<van-list>
					  <van-cell v-for="i in 100" :key="i" :class="'ele-'+i">
					  	<p>{{i}}:XXXXXXXXXXXXXXXXXXXXX</p>
		  				<p>XXXXXXXXXXXXXXXXXXXXXXX</p>
		  				<p>XXXXXXXXXXXXXXXXXXXXXXX</p>
					  </van-cell>
					</van-list>
		  	</iscroll-view>
		  </van-col>
		</van-row>
  	<!--<van-button type="default" @click="scrollToTop">默认按钮</van-button>-->
  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {
    	scroll_goods: '',
    };
  },
  mounted() {
  	this.scroll_goods = this.$refs.goods
  },
  methods: {
  	scrollToTop() {
  		const iscroll = this.scroll_goods
			iscroll.scrollToElement('.ele-34',500)
//		iscroll.goToPage(0,10)
  		iscroll.refresh()
//    iscroll.scrollTo(0, 0, 100)
  	}
  },
  watch: {},
  computed: {},
};
</script>

<style lang='scss' scoped>
.slide-content {width: 100%; height: 100vh;}
.slide-left {
	height: 100%;
	overflow: hidden;
}
.slide-right {
	position: relative;
	height: 100%;
	overflow: hidden;
}
.scroll-view {
  /* -- Attention: This line is extremely important in chrome 55+! -- */
  touch-action: none;
  overflow: hidden;
}
.type-2 {
	position: absolute;
	top: 0;
	left: 0;
	height: 30px;
	width: 100%;
}
.goods {
	position: absolute;
	bottom: 0;
	left: 0;
	height: calc(100% - 30px);
	width: 100%;
}
.wrapper-scroll-type1 {
	position: relative;
	overflow: hidden;
	width: 100%;
	height: 100%;
	.type1-list {
		height: 100%;
		width: calc(100% + 8px);
		position: absolute;
		overflow-x: hidden;
		overflow-y: scroll;
	}
}
.wrapper-scroll-type2 {
	position: relative;
	overflow: hidden;
	width: 100%;
	height: 30px;
	.type2-list {
		height: calc(100% + 8px);
		width: 100%;
		position: absolute;
		overflow-y: hidden;
		overflow-x: scroll;
	}
}
</style>
