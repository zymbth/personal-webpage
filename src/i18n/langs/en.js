import enLocale from 'element-ui/lib/locale/lang/en'
const en = {
	lang: {
		'hello': 'hello, world',
		'language': 'English',
		'theme': 'Theme'
	},
	pages:{
		'cover': "Home page",
		'about': "About",
		"page2": "Page 2",
		"career": "Career",
		"page3": "Notebooks",
		"blog": "Blogs"
	},
	button:{
		'delete': 'Delete',
	},
	themeList: {
		'list': [ //当前可选的颜色
			{ val: "#409EFF", name: "Sky Blue" },
			{ val: "#f5222d", name: "Apple Red" },
			{ val: "#304156", name: "Business Ash" },
			{ val: "#212121", name: "Default Black" },
			{ val: "#11a983", name: "Pure Green" },
			{ val: "#13c2c2", name: "Magic Blue" }
		]
	},
	cover: {
		'selfIntro': "I'm Yuemin Zhao",
		'names': ['Frontend Developer', 'Java Developer', 'Full Stack Developer'],
		'typeSpeed': '50',
		'backSpeed': '30'
	},
	about: {
		'items': [
			{'name': 'Name', 'val': 'Yuemin Zhao'},
			{'name': 'Profile', 'val': 'Frontend developer'},
			{'name': 'Email', 'val': 'ymzhaobth@aliyun.com'},
			{'name': 'Phone', 'val': '(86)13148787915'}
		],
		'echart': {
			'datas': [
				['score', '%', 'skill', 'description'],
				[88, 88, 'Java', 'Good at SpringBoot+SpringMVC+MybatisPlus'],
				[85, 85, 'JavaScript', 'Two years experience, good at vue and angular']
				[85, 85, 'HTML', 'Front-end basic skills'],
				[70, 70, 'CSS', 'Front-end basic skills'],
				[40, 40, 'Python', 'Mastered the basic grammar, wrote recommendation algorithms'],
			],
			'legend': ['Nobody knows better than me', 'Know nothing']
		},
		'selfIntro': {
			'title': 'About me',
			'text': "I was born in a small village of JiuJiang City, JiangXi Province, which brings me a hard-working spirit. " +
				"I was grew at the foot of mountain Lu, which develop me a mountaineering hobby. " +
				"You can't climb to the peak if you can't overcome the hardship of the journey. " +
				"And you can never image the scenery upon the peak before you reach there. " +
				"We don't need to compare with others, the meaning of our life is go to climb one after another mountains. " +
				"Love study, love life. This is my philosophy on life. " +
				"Study, work, life with full enthusiasm to live up to the good times."
		}
	},
	career: {
		careers: [{
			time: "2019/7/13",
			title: "Fuuwoo(ShenZhen) Technology Co. Ltd.",
			posi: "Fontend developer",
			contents: [
				"The trust of leadership made me realize the necessity of responsibility for my work",
				"The harmonious working atmosphere allows me to work with pleasure, and the good relationship between my colleagues also adds a lot of fun to the work."
			]
		},{
			time: "2018/8/1",
			title: "ShenZhen Institute For Innovative Design  ",
			posi: "Development intern",
			contents: [
				"Colleagues’ guidance and director’s guidance quickly dissipated the worries when I first started.",
				"Completely participated in a front-end and back-end separation project, contributing 40% of the front-end and 50% of the back-end code. Thanks for this internship, which bring me full understanding and interest in the front-end programming."
			]
		},{
			time: "2015/9/1",
			title: "Blekinge Institute of Technology(BTH)",
			posi: "Master",
			contents: [
				"Studying in a foreign country not only delights in the collision of different ideas, but also misses the hometown of the motherland.",
				"The strong academic atmosphere, teaching theory of parallel theory and practice have benefited me a lot."
			]
		},{
			time: "2011/9/1",
			title: "University of Science and Technology Beijing (USTB)",
			posi: "bachelor",
			contents: [
				'The young green onion leaves his hometown and enters Beijing University of Science and Technology thousands of miles away. After four years of quite annoying time, the school motto of "seeking truth and innovation" will always be remembered.'
			]
		}],
	},
	...enLocale
}

export default en