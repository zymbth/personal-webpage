<!-- 主页 -->
<template>
  <div>
    <!-- 折叠面板 (height:0消除默认样式)-->
    <el-collapse v-model="activeNames" class="top-menu hidden-xs-only">
      <el-collapse-item style="height: 0;margin-botttom:0;" name="nav">
        <!-- 导航栏 -->
        <nav-menu :pageIndex="pageIndex" @selectChange="handSelectChange" style="border-bottom: 0px;"></nav-menu>
      </el-collapse-item>
    </el-collapse>

		<!--小屏菜单栏-->
		<div class="hidden-sm-and-up" style="position: fixed;z-index: 2010;">
			<el-drawer
			  title="我是标题"
			  :visible.sync="drawer"
			  direction="ltr"
			  :with-header="false">
			  <!-- :pageIndex="pageIndex" :menuMode="'vertical'"-->
			  <nav-menu-mini @selectChange="handSelectChange"></nav-menu-mini>
			</el-drawer>
			<el-button @click="drawer = true" type="primary" style="margin-left: 16px;">Menu</el-button>
		</div>

		<!--回到顶部-->
		<el-backtop class="hidden-xs-only" style="right: 30px;bottom: 30px;">
			<div class="up-to-top" @mouseout="showUpText=true" @mouseover="showUpText=false">
				<div v-if="showUpText">
					<i class="el-icon-arrow-up"/>
				</div>
        <div v-else>UP</div>
       </div>
		</el-backtop>

    <cover-view v-if="hackResetCover" class="child-page"></cover-view>
    <about-view ref="about" class="child-page"></about-view>
    <page-two class="child-page"></page-two>
    <career-view class="child-page"></career-view>
    <my-space class="child-page"></my-space>
    <blog-view class="child-page"></blog-view>
		<footer class="footer">
			<el-row style="height:100%;">
				<!--copyright-->
				<el-col :span="12" style="height: 100%;">
					<p class="copyright">© Copyright 2020 Yuemin Zhao. All rights reserved.</p>
				</el-col>
				<!--social-link-->
				<el-col :span="12" class="social-info">
					<el-row>
						<el-col :span="8">
							<el-popover placement="top" width="200" trigger="hover" style="cursor: pointer;">
								<img :src="imgurl+'mywechat.jpg'" class="popover-content"
									style="width:200px;height:auto;"/>
								<img src="../assets/img/wechat.png" slot="reference"/>
							</el-popover>
						</el-col>
						<el-col :span="8">
							<a href="https://github.com/zymbth" target="_blank">
								<img src="../assets/img/github.png"/>
							</a>
						</el-col>
						<el-col :span="8">
							<a href="https://twitter.com/z_ymin">
								<img src="../assets/img/twitter.png"/>
							</a>
						</el-col>
						<!--<a><img src="../assets/img/ins.png"/></a>-->
					</el-row>
				</el-col>
			</el-row>
		</footer>
  </div>
</template>

<script>
import NavMenu from "@/views/nav-menu/NavMenu.vue"; //导航栏组件
import NavMenuMini from "@/views/nav-menu/NavMenuMini.vue"; //导航栏组件
import CoverView from "@/views/cover/CoverView";
import AboutView from "@/views/about/AboutView";
import PageTwo from "@/views/page-2/PageTwo";
import CareerView from "@/views/career/CareerView";
import MySpace from "@/views/my-space/MySpace";
import BlogView from "@/views/blog/BlogView";
import {debounce} from "@/assets/js/debounce.js";
//import 'element-ui/lib/theme-chalk/display.css';

export default {
  components: {
    NavMenu,
    NavMenuMini,
    CoverView,
    AboutView,
    PageTwo,
    CareerView,
    MySpace,
    BlogView
  },
  data() {
    return {
    	drawer: false,
      pageIndex: "1", //当前页的序号
      scrolltop: 0, //滑轮距顶部的距离

      activeNames: ['nav'], //折叠面板显示导航栏nav

			pages: [ // 必须与子页面排版顺序一致
				"cover-page",
				"about-page",
				"page-two",
				"career-page",
				"page-three",
				"blog-page"
			],
			pageOffsets: [],
			hackResetCover: true,
			showUpText: true,
    };
  },
  created() {},
  mounted() {
	this.devTalks();
		this.getPageDistance();
		this.getPulleyTopDistance();

		this.fetchPost("/zymwb/login/log_in", {username: 'admin', pwd: '123abc'}).then(res => {
			console.log(res);
		});
		
		/* this.fetchGetDemo("/demo_pj/test/demo").then(res => {
			console.log(res);
		}); */

		var that = this;
		window.addEventListener('resize', debounce(function(){
			that.getPageDistance();
			that.$refs.about.resizeEchart();
		}, 100, that));
	},
  methods: {
		eTop(id) {
			return document.getElementById(id).offsetTop;
		},
		getPageDistance() { //拿到每个page页面距窗体顶部的距离
			var that = this;
			this.pageOffsets = [];
			this.pages.forEach(p => this.pageOffsets.push(that.eTop(p)));
		},

		getPulleyTopDistance() { // 返回滑轮距顶部的距离
			var that = this;
			window.addEventListener('scroll', debounce(function(){
				let distance = document.documentElement.scrollTop || document.body.scrollTop; //获取页面元素距离顶部的距离
				distance - that.scrolltop > 0 ? that.activeNames = [''] : that.activeNames = ['nav'];
				that.scrolltop = distance; 
			}, 100, that));
		},	

    handSelectChange(index) { //选项改变的回调函数, 设置滚动到对应的page
			this.pulleyRoll(this.pageOffsets[index-1]);
		},

    pulleyRoll(top){ // top是page距窗体顶部的距离
      window.scrollTo({ //设置页面滚动到的的位置
        top: top, 
        behavior: "smooth" 
      });
    },

		reloadCover() { // 封面重载
			this.hackResetCover = false;
			this.$nextTick(() => {
				this.hackResetCover = true
			})
		},
		devTalks() { // 会话首次消息通知框
			let ck = sessionStorage.getItem("ck");
			if(!ck) {
				sessionStorage.setItem("ck", true);
				const h = this.$createElement;
				this.$message({
          message: h('p', null, [
            h('span', null, '猿来似你:'),
            h('i', { style: 'color: teal' }, '网站持续开发中~')
          ])
        });
			}
		},
  },
  watch: {
		scrolltop(val) { //监听 滑轮滚动的值的变化 来实现自动锚点, 即改变pageIndex
		val += 200;
			var len = this.pageOffsets.length;
			for(var i = len-1; i >= 0; i--) {
				if(this.pageOffsets[i] <= val) {
					this.pageIndex = i + 1 + '';
					break;
				}
			}
		},
		posList: function() {
			this.reloadCover();
		}
	},
  computed: {
		posList: function() {
			return this.$t('cover.names');
		}
	},
};
</script>

<style lang='scss' scoped>
.top-menu {
	border: 0;
	position: fixed;
	top: 0;
	z-index: 10;
}
.child-page {
  width: 100%;
  min-height: 400px;
  background-color: #f5f5f5;
  /*height: 100vh;*/
  font-size: 20px;
  text-align: left;
  box-sizing: border-box;
}
.footer {
	color: #f8f8ff;
	background: #303030;
	height: 100px;
	padding: 0 30px;
	
	.copyright {
		text-align: left;
    height: 100%;
    width: 100%;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
	}
	.social-info {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		img {
			height: 32px;
			width: 32px;
			display: inline-block;
			margin: 0 10px;
		}
	}
}
.up-to-top {
	height: 100%;
	width: 100%;
	border-radius: 2px;
	background-color: #f2f5f6;
	box-shadow: 0 0 6px rgba(0,0,0, .12);
  text-align: center;
  line-height: 40px;
  color: #1989fa;
  position: relative;
}
</style>
