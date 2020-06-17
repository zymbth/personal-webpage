<!-- 第一页 -->
<template>
	<div id="cover-page">
		<div class="intro-content">
			<div class="table-cell">
				<div class="container">
					<h4 class="intro-title">{{$t('cover.selfIntro')}}</h4>
					<vue-typed-js
						class="intro-typed"
						:strings="$t('cover.names')"
						:typeSpeed="100"
						:backSpeed="60"
						:loop="true">
						<h5 class="typing"></h5>
					</vue-typed-js>
				</div>
			</div>
		</div>
		<div class="mingyan">
			<i v-if="loadingFlag" class="el-icon-refresh upd-mingyan" @click="getMingyan" title="'来源：https://www.free-api.com/'"/>
			<i v-else class="el-icon-loading upd-mingyan"/>
			<p class="mingyan-content">{{mingyan.content}}</p>
			<p class="mingyan-author">——{{mingyan.author}}</p>
		</div>
	</div>
</template>

<script>

import axios from 'axios';

export default {
	components: {},
	data() {
		return {
			loadingFlag: false,
			mingyan: {
				content: '',
				author: ''
			},
		};
	},
	mounted() {},
	methods: {
		getMingyan() {
			this.loadingFlag = false
			axios.get('http://v1.alapi.cn/api/mingyan').then(res => {
	  			if(res && res.status == 200) {
	  				this.mingyan = res.data.data
	  				this.loadingFlag = true
	  			}
	  		})
		}
	},
	created() {
		this.getMingyan()
	},
};
</script>

<style lang='scss' scoped>
#cover-page {
	color: #333;
	text-align: center;
	font-size: 50px;
	height: 100vh;
	position: relative;
	background-color: rgba(0,0,0,0);
	/*background: url(../../assets/img/bg3.jpg) no-repeat;*/
	background: url(https://ymzhao-oss.oss-cn-hangzhou.aliyuncs.com/webapp/bg3.jpg) no-repeat;
	background-position: center;
	background-attachment: fixed;
	background-size:cover;
	/*transition-property: all;
	transition-duration: 1s;
	&:hover {
		height: 110vh;
	}*/
  
	.intro-content {
		position: absolute;
		text-align: center;
		width: 100%;
		height: 100%;
		display: table;
		color: #fff;
	}
	.mingyan {
		position: absolute;
		bottom: 20px;
		right: 20px;
		width: 30vw;
		min-height: 50px;
		p {
			font-size: 16px;
			color: #F0F0F0;
		}
		.upd-mingyan {
			position: absolute;
			right: -15px;
		    top: -5px;
		    font-size: 26px;
		    color: #f0f0f0;
		}
		.mingyan-content {
			text-align: justify;
			display: block;
			max-height: 20vh;
			overflow: hidden;
		    text-indent: 2em;
		}
		.mingyan-author {
			text-align: right;
		}
	}
}
.table-cell {
	display: table-cell;
	vertical-align: middle;
}
.container {
	box-sizing: border-box;
	width: 100%;
	padding-right: 15px;
	padding-left: 15px;
	margin-right: auto;
	margin-left: auto;
	.intro-title {margin: 0;}
	.intro-typed {
		height: 150px;
		justify-content: center;
	}
}
/*@media only screen and (min-width: 1200px) {
	.container {max-width: 1140px;}
}
@media only screen and (min-width: 992px) {
	.container {max-width: 960px;}
}
@media only screen and (min-width: 768px) {
	.container {max-width: 720px;}
}
@media only screen and (min-width: 576px) {
	.container {max-width: 540px;}
}*/
</style>