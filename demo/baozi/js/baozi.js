var material = {
	shiyan: "食盐",
	jijing: "鸡精",
	malaxian: "麻辣鲜",
	weijing: "味精",
	jiangyou: "酱油",
	cu: "醋",
	xianrou: "鲜肉",
	zhuyou: "猪油",
	douya: "豆芽",
	fensi: "粉丝",
	xuecai: "雪菜",
	xiaoqingcai: "小青菜",
	doufu: "豆腐",
	baitang: "白糖",
	baitang9: "白糖(少糖)",
	mianfen: "面粉",
	hujiaofen: "胡椒粉",
	shisanxiang: "十三香",
	lajiaofen: "辣椒粉",
	rouxian64: "肉馅(肥瘦64)",
	baihujiao: "白胡椒",
	mayou: "麻油",
	baijiu: "白酒",
	shengchou: "生抽",
	laochou: "老抽",
	shengjiang: "生姜",
	xiangcong: "香葱",
	shui: "水",
	xianggu: "香菇",
	dougan: "豆干",
	douyou: "豆油",
	baocaiye: "包菜叶",
	huluobo: "胡萝卜",
	xiaosuda: "小苏打",
	jiucai: "韭菜",
	jidan: "鸡蛋",
	heizhima: "黑芝麻",
	shiyongyou: "食用油",
	roumo: "肉末",
	liaojiu: "料酒",
	wuxiangfen: "五香粉",
	dadouyou: "大豆油",
	nuomi: "糯米",
	huoguodiliao: "火锅底料",
	malaxian: "麻辣鲜",
	suanzi: "蒜子",
	feirou: "肥肉",
	shourou: "瘦肉",
	lajiaohongyou: "辣椒红油",
	zishu: "紫薯",
	suancai: "酸菜"
};

var peifang = [
	{
		name: "酸菜包",
		main: "suancai",
		base: 350,
		quantity: {
			zhuyou: 85,
			huoguodiliao: 15,
			jijing: 11,
			weijing: 11,
			baitang: 8,
			lajiaofen: 4,
			hujiaofen: 2,
			shisanxiang: 2.5,
			malaxian: 4,
			mayou: 3,
			shengjiang: 4,
			suanzi: 4
		},
		note: "切记，酸菜多洗几遍，不然做出来很咸。锅里倒入熟猪油烧热加入生姜蒜子炸出香味加火锅底料，熬化关火，倒入辣椒粉，倒入酸菜开小火，把其他配料倒进去炒制，麻油最后放。"
	},
	{
		name: "粉丝包",
		main: "fensi",
		base: 350,
		quantity: {
			zhuyou: 80,
			huoguodiliao: 10,
			lajiaofen: 4,
			shiyan: 2.5,
			baitang: 7,
			jijing: 11,
			weijing: 11,
			shisanxiang: 4,
			malaxian: 5,
			mayou: 3.5,
			xiangcong: 20,
			shengjiang: 4,
			suanzi: 4
		},
		note: "水烧开，把干粉丝倒进去，盖好焖 10-15 分钟，泡好倒入篮子用凉水冲冷，再沥干切段。锅里倒入熟猪油烧热，倒入生姜大蒜炸出香味后加入火锅底料，熬开，关火加入辣椒粉，加入粉丝和其他配料炒制，炒好捞起来，凉了放冰箱冷冻再包。粉丝不能泡太久， 10-15 分钟左右，泡的时候中间还有白色说明没泡好，拿一条在手上能黏住说明泡好了，泡的时候隔几分钟拌一次，不然有的地方泡不到。"
	},
	{
		name: "豆腐包",
		main: "doufu",
		base: 350,
		quantity: {
			feirou: 45,
			shourou: 20,
			lajiaohongyou: 24,
			jijing: 11,
			weijing: 11,
			shiyan: 2.5,
			baitang: 5.5,
			lajiaofen: 3,
			xiangcong: 20,
			mayou: 2,
			suanzi: 5,
			shengjiang: 4
		},
		note: "豆腐沥干，少许豆油炸肥肉，加入葱蒜炸香，倒入瘦肉翻炒，炒半熟家辣椒油，再倒入豆腐、辣椒粉、调味料，翻炒均匀，不需开火炒。炒匀后加入芝麻油和香葱拌好。"
	},
	{
		name: "鲜肉包",
		main: "rouxian64",
		base: 500,
		quantity: {
			shiyan: 5,
			jijing: 10,
			weijing: 9,
			baitang: 11,
			shisanxiang: 1,
			baihujiao: 0.7,
			mayou: 2,
			baijiu: 2,
			shengchou: 7,
			laochou: 10,
			shengjiang: 15,
			xiangcong: 30,
			shui: 250
		},
		note: "肉买前腿肉，肥肉买厚的那种，肉一定要用绞肉机绞成末，最细的那种，颗粒一定不能粗，不然水分吸收不进去，肉买回来要冷冻一会才能做馅子，不冷冻水加不进肉里面，会导致水肉分离馅子出水。"
	},
	{
		name: "香菇青菜包",
		main:  "xiaoqingcai",
		base: 5000,
		quantity: {
			xianggu: 300,
			dougan: 1250,
			douyou: 330,
			shengjiang: 50,
			xiangcong: 125,
			mayou: 50,
			shiyan: 50,
			jijing: 125,
			weijing: 125,
			baitang: 150
		},
		note: "青菜过水甩干，水里加小苏打。"
	},
	{
		name: "香菇胡萝卜包菜",
		main:  "baocaiye",
		base: 500,
		quantity: {
			xiaosuda: 2,
			shiyan: 12,
			xianggu: 30,
			huluobo: 70,
			jijing: 7,
			weijing: 7,
			shisanxiang: 0.3,
			baitang: 12,
			baitang9: 9,
			zhuyou: 70,
			mayou: 3,
			xiangcong: 15,
			shengjiang: 4
		},
		note: "包菜叶脱水，500g 脱水后大概 300g，水挤得越干口感越好，每 500g 包菜脱水后加小苏打 2g、食盐 12g 腌制 20 分钟。"
	},
	{
		name: "韭菜鸡蛋",
		main:  "jiucai",
		base: 500,
		quantity: {
			jidan: 2,
			shiyan: 5,
			jijing: 10,
			weijing: 10,
			baitang: 6.5,
			shisanxiang: 2,
			mayou: 4,
			zhuyou: 60
		},
		note: "韭菜洗干净沥干切成小段，把鸡蛋放在碗里用筷子打开，在锅里放点色拉油炒嫩，最后全部放到一个盆里拌陷，放入各种作料，时间不能伴太长。"
	},
	{
		name: "黑芝麻",
		main: "heizhima",
		base: 200,
		quantity: {
			baitang: 160,
			zhuyou: 70,
			shiyongyou: 25,
			shui: 400
		},
		note: "糖和水都可以根据自己的口味调，水不要一次放进去，自己调稀稠度。芝麻放入锅中小火翻炒至熟，再倒入猪油翻炒均匀，再把芝麻倒入搅拌机放入少许水和适量白糖打碎，最后锅里放入食用油，倒入芝麻糊翻炒一会即可。"
	},
	{
		name: "烧麦",
		main: "nuomi",
		base: 500,
		quantity: {
			shiyan: 6,
			shengchou: 3,
			liaojiu: 2,
			laochou: 10,
			baitang: 12,
			wuxiangfen: 1.3,
			jijing: 12,
			weijing: 11,
			mayou: 7,
			dadouyou: 20,
			zhuyou: 60,
			huluobo: 100,
			xianggu: 100,
			roumo: 100
		},
		note: "500g 糯米蒸好大概 800g 饭。"
	},
	{
		name: "紫薯包",
		main: "zishu",
		base: 300,
		quantity: {
			baitang: 100,
			shiyongyou: 25,
			shui: 150
		},
		note: "紫薯放入高压锅小火炖，上汽七八分钟关掉，去皮，倒入搅拌机加水和白糖搅拌，制作：将锅内放入调和油，开小火，油微热就可以把泥状的紫薯放入，然后不停的翻动锅铲，将其搅拌均匀直到成糊状即可关火出锅。全程一定要小火加热。"
	}
];

var app = new Vue({
	el: '#app',
	data: {
		material: material,
		peifang: peifang,
		selectedPeifang: -1,
		computedQuantity: {},
		cache: {},
		hh: 1,
		showNote: false
	},
	methods: {
		switchSelect: function(key) {
			console.log(this.cache[key], this.cache);
			this.cache[key] = !this.cache[key];
			this.hh++;
		},
		empty: function() {
			this.cache = {};
			this.computedQuantity = {};
		},
		showInfo: function() {
			this.showNote = true;
		},
		hideInfo: function() {
			this.showNote = false;
		}
	}
})