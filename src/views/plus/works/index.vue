<!-- 作品页 -->
<template>
  <div class="plus-works">
  	<h3>作品集</h3>
	  <el-carousel :interval="5000" type="card" height="400px">
			<el-carousel-item v-for="(item, idx) in works" :key="idx" class="display-card">
				<p>{{item.title}}</p>
				<img v-if="item.img" :src="item.img" /><br />
				<a v-if="item.url" :href="item.url" target="_blank">查看详情</a>
				<router-link v-else-if="item.pathName" :to="{name:item.pathName}">查看详情</router-link>
			</el-carousel-item>
		</el-carousel>
  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {
    	works: [{
    		title: 'H5: Bmap local-search',
			url: '',
    		pathName: 'bmap',
    		img: this.imgurl + 'works/bmp/bmap_profile.jpg'
    	},{
    		title: 'H5: videos in page',
			url: '',
    		pathName: 'h5video',
    		img: this.imgurl + 'works/h5video/h5video_profile.jpg'
    	},{
    		title: 'Data transmission between Excel and Table',
			url: 'http://ymzhao.top/myvuetb/#/excel',
    		pathName: '', // excelAndTable
    		img: this.imgurl + 'works/tables/excelT.jpg'
    	},{
    		title: 'Editable Table Based on ElementUI',
			url: 'http://ymzhao.top/myvuetb/#/editable_v2',
    		pathName: '', // editableTable
    		img: this.imgurl + 'works/tables/editableT.jpg'
    	}/* ,{
    		title: 'three-level-slide',
			url: '',
    		pathName: 'threeLevSlide'
    	} */]
    };
  },
  mounted() {},
  methods: {
  	goHome() {
  		this.$router.push("/");
  	},
  },
  watch: {},
  computed: {},
};
</script>

<style lang='scss' scoped>
.plus-works {padding: 20px;}
.display-card {
	text-align: center;
	img {
		height: 300px;
		width: auto;
		margin: 0 auto;
	}
}
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
