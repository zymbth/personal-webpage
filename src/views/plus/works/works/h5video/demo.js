$(function() {
	var curVideo = null;
	var imgurl = 'https://ymzhao-oss.oss-cn-hangzhou.aliyuncs.com/webapp/';
	var contentList = [{
			"img": imgurl + "works/h5video/img1.jpg",
			"video": ""
		},
		{
			"img": imgurl + "works/h5video/img2.jpg",
			"video": ""
		},
		{
			"img": imgurl + "works/h5video/video1_postor.jpg",
			"video": imgurl + "works/h5video/video1.mp4"
		},
		{
			"img": imgurl + "works/h5video/video2_postor.png",
			"video": imgurl + "works/h5video/video2.mp4"
		},
		{
			"img": imgurl + "works/h5video/img3.jpg",
			"video": ""
		}
	]

	contentList.map((p, index) => {
		if(p.video) { // oncontextmenu="" //右键事件
			$(".content-list").append(`
				<video src="${p.video}" data-index=${index} controls="controls" controlslist="nodownload nofullscreen"
					class="content" width="100%" height="240" disablePictureInPicture="true"
					poster="${p.img || ''}" x5-video-player-type="h5">
				</video>`);
		} else $(".content-list").append(`<img class="content" src="${p.img}"></img>`);
	});
	var videos = document.getElementsByTagName("video");
	var winW = window.innerWidth, winH = window.innerHeight;
	for(var i = 0; i < videos.length; i++) {
//		videos[i]['disablePictureInPicture'] = true; //隐藏画中画
		videos[i].addEventListener('loadedmetadata', function() {
			var videoHeight = this.videoHeight, videoWidth = this.videoWidth;
			var videoH = (winW - 30)*videoHeight/videoWidth;
			if(videoH > 0.9*winH) videoH = 0.9*winH;
			else if(videoH < 0.2*winH) videoH = 0.2*winH;
			this.height = videoH;
		});
		videos[i].addEventListener("play",function(e){
			var index = $(this).attr("data-index");
			if(curVideo !== null && curVideo !== index) $(`video[data-index=${curVideo}]`).get(0).pause();
			curVideo = $(this).attr("data-index");
		});
	}
})
