<!-- 第3页 -->
<template>
	<div id="career-page">
		<h5 class="page-title">Career</h5>
		<p class="page-desc">Education and working experiences</p>
		<el-timeline>
			<el-timeline-item
				:timestamp="career.time"
				placement="top"
				v-for="(career, index) in $t('career.careers')"
				:key="index"
				:color="'#0bbd87'">
				<el-card>
					<h4>{{career.title}}</h4>
					<p>{{career.posi}}</p>
					<p v-for="(cont, idx) in career.contents" :key="idx" class="career-contents">{{cont}}</p>
				</el-card>
			</el-timeline-item>
		</el-timeline>
	</div>
</template>

<script>
export default {
	components: {},
	data() {
		return {

		};
	},
	mounted() {
	},
	methods: {}
};
</script>

<style lang='scss' scoped>
@media screen and (max-width:767px) {
	#career-page {padding: 20px 20px 20px 0;}
}
@media screen and (min-width:768px) {
	#career-page {padding: 50px 80px;}
}
#career-page {
	.career-contents {
		width: 100%;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
}
</style>