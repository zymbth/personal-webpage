<!-- 主页 -->
<template>
  <div class="note-hide-scrollbar">
  	<h3>隐藏滚动条</h3>
  	<h5>通过套上一层容器实现</h5>
  	<ul>
  		<li>内层高度与外层一致</li>
  		<li>内层绝对定位，宽度比外层长17px(一个滚动条宽度)</li>
  		<li>外层overflow=hidden</li>
  		<li>内层保持垂直滚动条(overflow-x=hidden;overflow-y=scroll)</li>
  		<li>具体样式F12自行查看</li>
  	</ul>
		<div class="wrapper">
			<div class="inner-div">
				<p v-for="i in 6">{{demoText}}</p>
			</div>
		</div>
		
		<h5>全局更改滚动条样式</h5>
		<p>{{codeStr}}</p>
		
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
    	demoText: '人类所有的实践活动归根结底都是劳动。劳动是马克思揭示人类社会发展一般规律的出发点，'+
    		'劳动价值论是马克思科学社会主义的理论根基。因此，新时代强调劳动教育既是对“知行合一”的继承和发展，'+
    		'也是贯彻马克思主义指导思想的必然要求。《意见》明确指出劳动教育的总体目标是“通过劳动教育，'+
    		'使学生能够理解和形成马克思主义劳动观，牢固树立劳动最光荣、劳动最崇高、劳动最伟大、劳动最美丽的观念”。'+
    		'概言之，就是培养马克思主义劳动观。马克思无疑是践行马克思主义劳动观的第一典范。',
		codeStr: `
::-webkit-scrollbar{
	width: 8px !important;
	height: 8px !important;
	background:transparent;
	filter: invert();
}
::-webkit-scrollbar:hover {background: rgba(128, 128, 128, 0.2);}
::-webkit-scrollbar-thumb {
	border: 1px solid rgba(255, 255, 255, 0.4) !important;
	background-color: rgba(0, 0, 0, 0.4) !important;
	z-index: 2147483647;
	-webkit-border-radius: 12px;
	background-clip: content-box;
}
::-webkit-scrollbar-corner {
	background: rgba(255, 255, 255, 0.3);
	border: 1px solid transparent
}
::-webkit-scrollbar-thumb:hover {background-color: rgba(0, 0, 0, 0.8) !important;}
::-webkit-scrollbar-thumb:active {background-color: rgba(0, 0, 0, 0.6) !important}
`
    };
  },
  created() {},
  mounted() {},
  methods: {
  },
};
</script>

<style lang='scss' scoped>
	.note-hide-scrollbar {
		width: 100%;
		padding: 20px;
		box-sizing: border-box;
	}
	.wrapper {
		border: 5px dotted #999;
		position: relative;
		overflow: hidden;
		height: 200px;
		.inner-div {
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
