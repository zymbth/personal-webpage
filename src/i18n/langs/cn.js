import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
const cn = {
	lang: {
		'hello': '你好，世界',
		'language': '中文',
		'theme': '主题'
	},
	pages:{
		'cover': "首页",
		'about': "关于",
		"page2": "第2页",
		"career": "履历",
		"page3": "笔记本",
		"blog": "博文"
	},
	button:{
		'delete': '删除',
	},
	themeList: {
		'list': [ //当前可选的颜色
			{ val: "#409EFF", name: "星空蓝" },
			{ val: "#f5222d", name: "苹果红" },
			{ val: "#304156", name: "商务灰" },
			{ val: "#212121", name: "默认黑" },
			{ val: "#11a983", name: "清新绿" },
			{ val: "#13c2c2", name: "魔法蓝" }
		]
	},
	cover: {
		'selfIntro': '赵跃旻',
		'names': ['前端开发工程师', 'Java开发工程师', '全栈开发工程师'],
		'typeSpeed': '100',
		'backSpeed': '60'
	},
	about: {
		'items': [
			{'name': '姓名', 'val': '赵跃旻'},
			{'name': '职业', 'val': '前端工程师'},
			{'name': '邮箱', 'val': 'ymzhaobth@aliyun.com'},
			{'name': '电话', 'val': '(86)13148787915'}
		],
		'echart': {
			'datas': [
				['score', '%', 'skill', 'description'],
				[88, 88, 'Java', '擅长SpringBoot+SpringMVC+MybatisPlus框架'],
				[85, 85, 'JavaScript', '拥有两年实战经验，基于vue、angular完成了多个前端项目'],
				[85, 85, 'HTML', '前端基础技能'],
				[70, 70, 'CSS', '前端基础技能'],
				[40, 40, 'Python', '掌握基本语法，编写过推荐算法']
			],
			'legend': ['没有人比我更懂', '一无所知']
		},
		'selfIntro': {
			'title': 'About me',
			'text': '1993年生于江西九江的一个小乡村，幼年的乡村生活经历给予了我吃苦耐劳的精神。' +
				'生长在庐山脚下的我喜爱登山，它告诉我，' +
				'忍受不了路途的艰辛就无法登上高峰，不登上高峰就永远看不到峰顶的风光。' +
				'无需同他人比较，人生就是要亲自去攀登一座又一座高山。' +
				'热爱学习、热爱生活，这是我的人生观。满怀热情得学习、工作、生活，如此才不负大好时光。'
		}
	},
	career: {
		careers: [{
			time: "2019/7/13",
			title: "扶沃(深圳)科技有限公司",
			posi: "前端工程师",
			contents: [
				"领导的信任让我意识到对工作的责任感的必要性。",
				"和谐的工作氛围让我得以投入工作，同事间的良好关系也给工作增添了很多趣味。"
			]
		},{
			time: "2018/8/1",
			title: "深圳创新与设计研究院",
			posi: "开发实习生",
			contents: [
				"同事的指引、主任的指导让初我初入职时的彷徨很快消散。",
				"完整参与了一个前后端分离项目，贡献了前端40%、后端70%的代码。感恩此次实习，让我对前端有了充分的了解与兴趣。"
			]
		},{
			time: "2015/9/1",
			title: "瑞典布莱津理工大学",
			posi: "研究生",
			contents: [
				"异国他乡求学，既喜悦于不同思想的碰撞，又思念祖国家乡。",
				"浓厚的学术氛围、理论与实践并行的教学理念让我受益良多。"
			]
		},{
			time: "2011/9/1",
			title: "北京科技大学",
			posi: "本科生",
			contents: [
				"青葱少年离开家乡，进入千里之外的北科大。度过四年颇为彷徨的时光，“求实鼎新”的校训将永远铭记。"
			]
		}],
	},
	...zhLocale
}

export default cn