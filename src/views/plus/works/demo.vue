<!-- 主页 -->
<template>
  <div class="slide-content">
		  	<iscroll-view
		  		class="scroll-view"
		  		ref="type_2"
		  		:options="{preventDefault: false,scrollY:false}"
		  		>
		  		<div style="white-space:nowrap;">
		  			<van-button v-for="i in 10" :key="i" type="primary" size="mini" :class="'btn-'+i">按钮{{i}}</van-button>
		  		</div>
		  	</iscroll-view>
  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {};
  },
  mounted() {
  	const iscroll = this.$refs.type_2
  	iscroll.scrollToElement('.btn-2',500)
  	iscroll.refresh()
  	console.log(iscroll)
  },
  methods: {
  	scrollToTop() {
  		const iscroll = this.$refs.type_2
			iscroll.scrollToElement('.ele-34',500)
  		iscroll.refresh()
  	}
  },
  watch: {},
  computed: {},
};
</script>

<style lang='scss' scoped>
.slide-content {width: 100%; height: 100vh;}
.scroll-view {
  /* -- Attention: This line is extremely important in chrome 55+! -- */
 position: fixed;
 top: 0;
 right: 0;
 left: 0;
 bottom: 0;
  touch-action: none;
  overflow: hidden;
}
</style>
