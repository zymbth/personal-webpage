<!-- 第2页 -->
<template>
	<div id="about-page" class="page-two">
		<el-card shadow="always">
			<el-row :gutter="20">
				<!--左侧：图表-->
				<el-col :xs="24" :sm="12">
					<el-row :gutter="15">
						<!--个人图片-->
						<el-col :xs="24" :sm="10">	
							<el-avatar :src="imgurl+'avatar.jpg'" @error="true" class="profile-image">
								<img :src="imgurl+'def_avatar.jpg'" style="width:100%;height:auto;"/>
							</el-avatar>
						</el-col>
						<!--个人信息-->
						<el-col :xs="24" :sm="14">
							<p class="strong-font-weight" v-for="(item, idx) in $t('about.items')" :key="idx">
								{{item.name}}: <span>{{item.val}}</span>
							</p>
						</el-col>
					</el-row>
					<!--专业技能-->
					<div class="bottom clearfix">
						<div id="echart-skill"
							v-loading="loading"
							element-loading-text="loading..."
							element-loading-spinner="el-icon-loading">
						</div>
					</div>
				</el-col>
				<!--右侧：文字简介-->
				<el-col :xs="24" :sm="12" class="about-descr">
					<div class="animation">
						<div id="bm" class="lottie"></div>
						<!-- path="packages/lf20_0j4kzlaf.json" -->
					</div>
					<h4>{{$t('about.selfIntro.title')}}</h4>
					<p style="text-align:justify;">{{$t('about.selfIntro.text')}}</p>
				</el-col>
			</el-row>
		</el-card>
	</div>
</template>

<script>
//import * as Echarts from 'echarts';

export default {
	components: {},
	data() {
		return {
			loading: true,
			// echarts: null,
			myChart: null,
			anim: null,
		};
	},
	mounted() {
		this.setEchart();
		let animation = lottie.loadAnimation({
		  container: document.getElementById('bm'),
		  renderer: 'svg',
		  loop: true,
		  autoplay: true,
		  path: 'animation/mountain_1.json'
		})
	},
	methods: {
		resizeEchart() {
			this.myChart.resize();
		},
		setEchart() {
			// this.echarts = require('echarts');
			// this.myChart = this.echarts.init(document.getElementById('echart-skill'));
			this.myChart = echarts.init(document.getElementById('echart-skill'));

			var option = {
				tooltip: {
			        trigger: 'axis',
			        axisPointer: {
			            type: 'shadow'
			        },
			        formatter: function (params, ticket, callback) {
			            return params[0].value[3];
			        },
			        position: function (point, params, dom, rect, size) {
			        	var pX = (size.contentSize[0] + point[0] > size.viewSize[0]) ?
			        		size.viewSize[0] - size.contentSize[0] : point[0];
			        	var pY = point[1] - size.contentSize[1]/2;
						return [pX, pY];
					}
			    },
				dataset: {
					source: this.$t('about.echart.datas')
				},
				grid: {containLabel: true},
				xAxis: {name: '%'},
				yAxis: {type: 'category'},
				visualMap: {
					orient: 'horizontal',
					left: 'center',
					min: 10,
					max: 100,
					text: this.$t('about.echart.legend'),
					dimension: 0, // Map the score column to color
					inRange: {
						color: ['#D7DA8B', '#E15457']
					}
				},
				series: [{
					type: 'bar',
						encode: {
							x: '%', // Map the column to X axis.
							y: 'skill'
						}
					}
				]
			};
			this.loading = false;
			this.myChart.setOption(option);
        },
	},
	created() {}
};
</script>

<style lang='scss' scoped>
@media screen and (max-width:767px) {
	#about-page {padding: 20px 0;}
}
@media screen and (min-width:768px) {
	#about-page {padding: 50px 80px;}
}
#echart-skill {
	min-height: 300px;
}
.profile-image {
	width: 100%;
	height: auto;
}
.strong-font-weight {
	font-weight: 600;
	span {font-weight: normal;}
}
.about-descr {
	position: relative;
	
	.animation {
		height: 100px;
		width: 100px;
		position: absolute;
		top: -20px;
		right: 0;
	}
}
#bm {
  width: 100%;
  height: 100%;
}
</style>