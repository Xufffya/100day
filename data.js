// 存储100天的记忆内容和照片
window.dayData = {
    1: {
        memory: "不必在今日就承诺永恒 但我愿意接过你的真心",
        photo: "./images/day1.jpg"  // 新增照片字段
    },
    2: {
        memory: "解学长真会说话啊 那就久一点再久一点",
        photo: "./images/day2.jpg"
    },
    3: {
        memory:"不开心晚上快十点又出来陪我散步 情绪无法快速消解 但对你的信任都又多了一分",
        photo: "./images/day3.jpg"
    },
    4: {
        memory: "投完篮之后突然想让你来接我 其实怕麻烦你 但你后来说你开心",
        photo: "./images/day4.jpg"
    },
    5: {
        memory: "“披着解鲁宁大衣的鹅”？。",
        photo: "./images/day5.jpg"
    },
    6: {
        memory: "以万圣夜之名多了一次仪式感 我站在今天无法回到过去的想法 我相信你我需要你",
        photo: "./images2/day6.jpg"
    },
    7: {
        memory: "好吃的煎饼 又完成了一件“随口一说的小事”",
        photo: "./images2/day7.jpg"
    },
    8: {
        memory: "南瓜蛋黄味的奶茶和",
        photo: "./images2/day8.jpg"
    },
    9: {
        memory: "解学长的大作 其实拍的还不错",
        photo: "./images2/day9.jpg"
    },
    10: {
        memory: "解学长居然给我买暖手宝 还是粉色的我很开心 不过相处久了发现还是解鲁宁最好用",
        photo: "./images2/day10.jpg"
    },
    11: {
        memory: "随口一提的芒果糯米饭解鲁宁又带我吃了 真的很开心",
        photo: "./images3/day11.jpg"
    },
    12: {
        memory: "这就是隐藏版徐菲雅吗……表情包都多发了很多",
        photo: "./images3/day12.jpg"
    },
    13: {
        memory: "立冬 你在身边 淡淡的安心感（骗你的 不是淡淡）",
        photo: "./images3/day13.jpg"
    },
    14: {
        memory: "今天似乎不是很开心 但没关系",
        photo: "./images3/day14.jpg"
    },
    15: {
        memory: "我担心你因为我绕路而不开心 你竟夸奖我主动说出来了 我应该足够相信你",
        photo: "./images3/day15.jpg"
    },
    16: {
        memory: "谢谢你 现在依旧谢谢你 我爱你",
        photo: "./images4/day16.jpg"
    },
    17: {
        memory: "我的情绪不太稳定 但一见到解鲁宁所有不开心都忘了",
        photo: "./images4/day17.jpg"
    },
    18: {
        memory: "犹豫了好久才说 其实就是想和你待一起",
        photo: "./images4/day18.jpg"
    },
    19: {
        memory: "解鲁宁真的太太太太太可爱了",
    },
    20: {
        memory: "解鲁宁总会以我为主怕我累 但在我这其实是更想陪解鲁宁",
    },
    21: {
        memory: "之前说不出口的喜欢你 现在我可以笃定地对你说很多很多次",
        photo: "./images4/day21.jpg"
    },
    22: {
        memory: "好好好好好大的喜糖",
        photo: "./images4/day22.jpg"
    },
    23: {
        memory: "抱歉 让你不开心了",
    },
    24: {
        memory: "当时让我很苦恼矛盾的事情 现在看来也只是小事",
    },
    25: {
        memory: "其实看着解鲁宁小心翼翼的样子我很心疼 今天先出现了我的 助眠三件套",
    },
    26: {
        memory: "你的存在 治愈我",
        photo: "./images5/day26.jpg"
    },
    27: {
        memory: "和解鲁宁一起解决问题就会变得轻松愉快（除了到底该去哪哈哈哈）",
        photo: "./images5/day27.jpg"
    },
    28: {
        memory: "红山动物园 我们有了第一张正经合照",
        photo: "./images5/day28.jpg"
    },
    29: {
        memory: "想起解鲁宁 总会更开心一点",
    },
    30: {
        memory: "晚上好 解学长",
        photo: "./images5/day30.jpg"
    },
    31: {
        memory: "好看的兔子 我很期待",
        photo: "./images5/day31.jpg"
    },
    32: {
        memory: "金工实习的解鲁宁什么时候回来呢",
    },
    33: {
        memory: "你说希望我天天开心 那你呢",
    },
    34: {
        memory: "明天见",
    },
    35: {
        memory: "我有无数次需要你的拥抱 还好你回来了",
    },
    36: {
        memory: "没关系 大事化小事 小事化开心果味的小蛋糕",
    },
    37: {
        memory: "好好好好好好好学习中",
    },
    38: {
        memory: "很难过 不过和解鲁宁说说话就好多了",
        photo: "./images6/day38.jpg"
    },
    39: {
        memory: "考试考试考试 解鲁宁为什么还不回来呢",
    },
    40: {
        memory: "解鲁宁让我不开心了 扣分！！！",
    },
    41: {
        memory: "小解的衣服就是很暖和",
        photo: "./images6/day41.jpg"
    },
    42: {
        memory: "明天见",
    },
    43: {
        memory: "一起吃好吃的！",
    },
    44: {
        memory: "一起加油",
    },
    45: {
        memory: "没关系的 和你相比那一定是小事",
        photo: "./images6/da45.jpg"
    },
    46: {
        memory: "唯一开心的事是和解鲁宁一起吃饭",
    },
    47: {
        memory: "就是想和你一起散步",
        photo: "./images6/day47.jpg"
    },
    48: {
        memory: "嗯 我愿意建造一个以我们为中心的世界",
    },
    49: {
        memory: "天很冷 你什么时候会发现我塞给你的小礼物呢",
    },
    50: {
        memory: "早点睡",
    },
    51: {
        memory: "没关系",
    },
    52: {
        memory: "解鲁宁太细心了",
    },
    53: {
        memory: "偷偷折好了第一个",
        photo: "./images6/day53.jpg"
    },
    54: {
        memory: "对不起对不起对不起对不起！让你担心了",
    },
    55: {
        memory: "解鲁宁坐在旁边自带监督功能 徐菲雅好好学习奋笔疾书",
    },
    56: {
        memory: "好喝的酸奶诶",
    },
    57: {
        memory: "好好好好好可爱",
        photo: "./images7/day57.jpg"
    },
    58: {
        memory: "一起在图书馆 一起吃饭",
    },
    59: {
        memory: "我说我好难过",
        photo: "./images7/day59.jpg"
    },
    60: {
        memory: "接力考试日",
    },
    61: {
        memory: "圣诞快乐 和你玩游戏也很开心",
    },
    62: {
        memory: "打cs好难好难好难 三角洲可以接受 躲在解鲁宁后面偷偷偷偷捡东西",
    },
    63: {
        memory: "我看着阳光落在你的身上 怎么会感觉这么安稳",
        photo: "./images7/day63.jpg"
    },
    64: {
        memory: "平常又开心",
    },
    65: {
        memory: "解鲁宁你这个天赋怪！！！",
        photo: "./images7/day65.jpg"
    },
    66: {
        memory: "拉着解鲁宁陪我上晚自习 嗯嗯起到完美监督作用",
    },
    67: {
        memory: "新年快乐",
        photo: "./images7/day67.jpg"
    },
    68: {
        memory: "发烧日 噩梦的开始",
    },
    69: {
        memory: "继续发烧 继续烦解鲁宁",
        photo: "./images8/day69.jpg"
    },
    70: {
        memory: "发烧半夜想吃橙子 解鲁宁给我点外卖了 我真想哭",
    },
    71: {
        memory: "变胃疼了 解鲁宁真的很棒很棒答辩好像100分 是我的榜样",
    },
    72: {
        memory: "你硬要陪我挂水 我其实不想 太虚弱了",
    },
    73: {
        memory: "继续挂水和复习",
    },
    74: {
        memory: "解鲁宁又陪我挂水 我们玩了好多小游戏 很开心哈哈哈哈",
    },
    75: {
        memory: "好好好好看的小蛋糕！解鲁宁又给我买好吃的咯",
        photo: "./images8/day75.jpg"
    },
    76: {
        memory: "终于放假        ",
    },
    77: {
        memory: "穿着可爱的衣服 身边是我最在意的人",
        photo: "./images8/day77.jpg"
    },
    78: {
        memory: "一起打王者吧 就是想陪你",
        photo: "./images8/day78.jpg"
    },
    79: {
        memory: "放假日常",
        photo: "./images8/day79.jpg"
    },
    80: {
        memory: "想见你",
    },
    81: {
        memory: "解鲁宁拿着金灿灿的面包出现的时候 解鲁宁也是金灿灿的",
        photo: "./images9/day81.jpg"
    },
    82: {
        memory: "九点睡五点起 在解鲁宁在帮助下成功看见日出",
    },
    83: {
        memory: "无",
    },
    84: {
        memory: "开心果碱水球！！",
    },
    85: {
        memory: "打乱我计划的小解你该当何罪 天天开心",
        photo: "./images9/day85.jpg"
    },
    86: {
        memory: "雪是亮晶晶的 你开心吗",
        photo: "./images9/day86.jpg"
    },
    87: {
        memory: "给你炖了梨汤 我厉不厉害",
    },
    88: {
        memory: "偷偷去学校 见到你就开心",
        photo: "./images9/day88.jpg"
    },
    89: {
        memory: "忙碌的解学长",
    },
    90: {
        memory: "让解鲁宁久等了……对不起！",
        photo: "./images9/day90.jpg"
    },
    91: {
        memory: "越来越在乎越容易不开心",
    },
    92: {
        memory: "我宣布 解鲁宁就是最好的枕头！",
    },
    93: {
        memory: "需要你的安慰",
    },
    94: {
        memory: "终于吃上了BC面包 解鲁宁 又是拙劣的借口",
    },   
    95: {
        memory: "过两天见 我在这 不用担心 注意安全",
    },   
    96: {
        memory: "反复审视 层层推敲",
    },   
    97: {
        memory: "过程并不完美,现实也从不浪漫",
    },   
    98: {
        memory: "但我真的真的真的真的想说",
    },   
    99: {
        memory: "我相信你 我爱你 我也想要你开心",
    },   
};

// 确保所有天数都有基础数据
for (let i = 1; i <= 100; i++) {
    if (!window.dayData[i]) {
        window.dayData[i] = {
            memory: `第${i}天的故事等待被书写...`,
            photo: null  // 没有照片
        };
    }
}
