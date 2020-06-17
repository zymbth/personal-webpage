<!-- 第4页 -->
<template>
	<div id="blog-page">
		<h5 class="page-title">blog</h5>
		<p class="page-desc">Published blogs (Demo)</p>
		<div class="blog-list">
			<el-card shadow="always" v-for="(blog, idx) in blogs" :key="idx" class="blog-card">
				<h3 class="blog-title">{{blog.title}}</h3>
				<span class="blog-time">{{blog.time}}</span>
				<p class="blog-desc">{{blog.desc}}</p>
				<a class="blog-detail">Read more →</a>
			</el-card>
		</div>
	</div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
    	blogs: [{
    		title: "Why Every Developer Should Have A Blog",
    		time: "Published 2 days ago",
    		desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa." +
				"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies"
    	},{
    		title: "A Guide to Becoming a Full-Stack Developer",
    		time: "Published 3 months ago",
    		desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa." +
				"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies"
    	},{
    		title: "High Performance JavaScript",
    		time: "Published 1 month ago",
    		desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa." +
				"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies"
    	},{
    		title: "Top 5 JavaScript Frameworks",
    		time: "Published 2 months ago",
    		desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa." +
				"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies"
    	},{
    		title: "Learn React in 24 Hours",
    		time: "Published 2 months ago",
    		desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa." +
				"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies"
    	},{
    		title: "About Remote Working",
    		time: "Published 3 months ago",
    		desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa." +
				"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies"
    	}]
    };
  },
  mounted() {
  },
  methods: {}
};
</script>

<style lang='scss' scoped>
@media screen and (max-width:767px) {
	#blog-page {padding: 20px 10px;}
}
@media screen and (min-width:768px) {
	#blog-page {padding: 50px 80px;}
}
.blog-card {
	margin: 15px auto;
	.blog-title {
		color: #292929;
		font-size: 1.275rem;
	}
	.blog-time {
		color: #8f8f8f;
		font-size: 0.8125rem;
	}
	.blog-desc {
		font-size: 0.875rem;
		font-size: 13px;
		text-overflow: ellipsis;
		-webkit-line-clamp: 2;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		overflow: hidden;

	}
	.blog-detail {
		cursor: pointer;
		font-size: 0.8125rem;
		color: #5FCB71;
		text-decoration: none;
		&:hover {color: #386f41;}
	}
}
</style>