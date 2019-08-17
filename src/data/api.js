export const fetters = [{
        label: "恶魔",
        en: "em",
        level: [
            "2/4/6个恶魔",
            "恶魔的攻击有20/35/60%几率灼烧一名敌人的所有法力值并造成300%的伤害"
        ]
    },
    { label: "龙", en: "long", level: ["2个龙", "龙免疫83%魔法伤害"] },
    {
        label: "浪人",
        en: "liuwang",
        level: [
            "1个浪人",
            "战斗开始时，如果一名浪人的邻近格子没有友军，获得一层等同于自身最大生命值的护盾"
        ]
    },
    {
        label: "极地",
        en: "binghe",
        level: [
            "2/4/6个极地",
            "极地生物们的攻击有20/30/45%几率对目标造成持续2秒的晕眩效果"
        ]
    },
    {
        label: "帝国",
        en: "diguo",
        level: ["2/4个帝国", "1名随机/所有的帝国单位造成双倍伤害"]
    },
    {
        label: "忍者",
        en: "renzhe",
        level: ["1/4个忍者", "提高忍者40/60攻击力和法术强度"]
    },
    {
        label: "贵族",
        en: "gaogui",
        level: [
            "3/6个贵族",
            "增加1个随机/所有友军60护甲和魔抗并且每次攻击治疗该友军35点生命值"
        ]
    },
    {
        label: "暗影",
        en: "huanying",
        level: ["2个暗影", "在战斗开始时诅咒一名随机的敌人，将其生命值设置为100"]
    },
    {
        label: "海盗",
        en: "haidao",
        level: [
            "3个海盗",
            "在与另一名玩家作战之后，最多可赚取4枚额外的金币。（每个箱子的平均金币：1.75）"
        ]
    },
    {
        label: "机器人",
        en: "jiqiren",
        level: ["1个机器人", "机器人在开始战斗时就有满额的法力值"]
    },
    {
        label: "虚空",
        en: "kongxu",
        level: ["3个虚空", "虚空单位现在造成真实伤害"]
    },
    {
        label: "狂野",
        en: "yeshen",
        level: [
            "2/4个狂野",
            "野性友军/所有友军的攻击会生成怒气层数，最多5层，每层怒气提供10%的攻击速度加成"
        ]
    },
    {
        label: "约德尔人",
        en: "yordle",
        level: [
            "3/6个约德尔人",
            "对友方约德尔人进行的攻击会有30/55%几率未命中。（也能闪避攻击特效。）"
        ]
    }
];

export const vocation = [{
        label: "刺客",
        en: "cike",
        level: [
            "3/6个刺客",
            "刺客们会额外获得150/350%的暴击伤害。非刺客类英雄的移动会在战斗开始时被减慢"
        ]
    },
    {
        label: "剑士",
        en: "daojiandashi",
        level: ["3/6/9个剑士", "剑士们的每次攻击有45%几率打出1/2/4次额外攻击"]
    },
    {
        label: "斗士",
        en: "jingzheng",
        level: ["2/4个斗士", "斗士获得额外的300/700点最大生命值"]
    },
    {
        label: "元素使",
        en: "yuansu",
        level: [
            "3个元素使",
            "元素使们的攻击提供双倍法力值，在战斗开始时，召唤一个元素魔像。元素生命值：2500"
        ]
    },
    {
        label: "护卫",
        en: "jianhuren",
        level: [
            "2个护卫",
            "在战斗开始时，所有守护者和邻近格子的友军获得50点护甲加成。守护者们不会给自己提供增益"
        ]
    },
    {
        label: "枪手",
        en: "shenqiang",
        level: [
            "2/4/6个枪手",
            "在攻击之后，枪手们的攻击有50%几率对另一名随机/另两名随机/另三名随机敌人打出额外的攻击"
        ]
    },
    {
        label: "骑士",
        en: "qishi",
        level: ["2/4/6个骑士", "整支队伍无视来自所有来源的15/30/55伤害"]
    },
    {
        label: "游侠",
        en: "youxia",
        level: [
            "2/4个游侠",
            "游侠们每过3秒都有25/65%几率来使他们在接下来的3秒内攻速翻倍"
        ]
    },
    {
        label: "换形师",
        en: "bianxing",
        level: ["3/6个换形师", "换形师会在他们变形时获得额外的60/120%最大生命值"]
    },
    {
        label: "法师",
        en: "wushi",
        level: ["3/6个法师", "所有友军增加35/100%技能伤害"]
    }
];

export const weapon = [{
        label: "无尽之刃",
        en: "无尽之刃",
        // en: "wujinzhiren",
        level: 2,
        info: ["+100%暴击伤害"],
        // parent: ["baofengdajian", "baofengdajian"]
        parent: ["暴风大剑", "暴风大剑"]
    },
    {
        label: "神圣之剑",
        en: "神圣之剑",
        level: 2,
        info: ["每秒+5%暴击几率，最高100%"],
        parent: ["暴风大剑", "反曲之弓"]
    },
    {
        label: "海克斯科技枪刃",
        en: "海克斯科技枪刃",
        level: 2,
        info: ["+25%所有伤害吸血"],
        parent: ["暴风大剑", "无用大棒"]
    },
    {
        label: "朔极之矛",
        en: "朔极之矛",
        level: 2,
        info: ["每次普通攻击回复20%最大法力值"],
        parent: ["暴风大剑", "女神之泪"]
    },
    {
        label: "守护天使",
        en: "守护天使",
        level: 2,
        info: ["携带者可以复活并拥有300生命值"],
        parent: ["暴风大剑", "锁子甲"]
    },
    {
        label: "饮血剑",
        en: "饮血剑",
        level: 2,
        info: ["+50%攻击吸血"],
        parent: ["暴风大剑", "负极斗篷"]
    },
    {
        label: "基克的先驱",
        en: "基克的先驱",
        level: 2,
        info: ["相邻格子友军+20%攻速"],
        parent: ["暴风大剑", "巨人腰带"]
    },
    {
        label: "幽梦之灵",
        en: "幽梦之灵",
        level: 2,
        info: ["获得刺客身份"],
        parent: ["暴风大剑", "金铲子"]
    },
    {
        label: "疾射火炮",
        en: "疾射火炮",
        level: 2,
        info: ["攻击不会被闪避，且攻击距离翻倍"],
        parent: ["反曲之弓", "反曲之弓"]
    },
    {
        label: "鬼索的狂暴之刃",
        en: "鬼索的狂暴之刃",
        level: 2,
        info: ["每次攻击+3%攻速，可无限叠加"],
        parent: ["反曲之弓", "无用大棒"]
    },
    {
        label: "斯塔缇克电刃",
        en: "斯塔缇克电刃",
        level: 2,
        info: ["每三次攻击都会造成100点溅射魔法伤害"],
        parent: ["反曲之弓", "女神之泪"]
    },
    {
        label: "幻影之舞",
        en: "幻影之舞",
        level: 2,
        info: ["闪避所有暴击"],
        parent: ["反曲之弓", "锁子甲"]
    },
    {
        label: "诅咒之刃",
        en: "诅咒之刃",
        level: 2,
        info: ["攻击时有几率降低目标一个星级"],
        parent: ["反曲之弓", "负极斗篷"]
    },
    {
        label: "巨型九头蛇",
        en: "巨型九头蛇",
        level: 2,
        info: ["攻击造成携带者10%最大生命值溅射伤害"],
        parent: ["反曲之弓", "巨人腰带"]
    },
    {
        label: "破败王者之刃",
        en: "破败王者之刃",
        level: 2,
        info: ["获得剑士身份"],
        parent: ["反曲之弓", "金铲子"]
    },
    {
        label: "灭世者的死亡之帽",
        en: "灭世者的死亡之帽",
        level: 2,
        info: ["+50%技能伤害"],
        parent: ["无用大棒", "无用大棒"]
    },
    {
        label: "卢登的回声",
        en: "卢登的回声",
        level: 2,
        info: ["技能在命中时造成溅射伤害"],
        parent: ["无用大棒", "女神之泪"]
    },
    {
        label: "钢铁烈阳之匣",
        en: "钢铁烈阳之匣",
        level: 2,
        info: ["在战斗开始时，为相邻格子的友军提供一层200生命值的护盾"],
        parent: ["无用大棒", "锁子甲"]
    },
    {
        label: "离子火花",
        en: "离子火花",
        level: 2,
        info: ["敌方在每次施放技能时都会承受伤害"],
        parent: ["无用大棒", "负极斗篷"]
    },
    {
        label: "莫雷洛秘典",
        en: "莫雷洛秘典",
        level: 2,
        info: ["技能造成灼烧效果，并减少其治疗效果"],
        parent: ["无用大棒", "巨人腰带"]
    },
    {
        label: "悠米",
        en: "悠米",
        level: 2,
        info: ["获得法师身份"],
        parent: ["无用大棒", "金铲子"]
    },
    {
        label: "炽天使之拥",
        en: "炽天使之拥",
        level: 2,
        info: ["技能释放后回复20点法力值"],
        parent: ["女神之泪", "女神之泪"]
    },
    {
        label: "冰霜之心",
        en: "冰霜之心",
        level: 2,
        info: ["降低相邻格子敌人20%攻速"],
        parent: ["女神之泪", "锁子甲"]
    },
    {
        label: "沉默之刃",
        en: "沉默之刃",
        level: 2,
        info: ["攻击时有几率沉默目标"],
        parent: ["女神之泪", "负极斗篷"]
    },
    {
        label: "救赎",
        en: "救赎",
        level: 2,
        info: ["携带者死亡时治疗附近友军1000生命值"],
        parent: ["女神之泪", "巨人腰带"]
    },
    {
        label: "暗裔",
        en: "暗裔",
        level: 2,
        info: ["获得恶魔身份"],
        parent: ["女神之泪", "金铲子"]
    },
    {
        label: "荆棘之甲",
        en: "荆棘之甲",
        level: 2,
        info: ["被攻击时反弹25%的所有伤害"],
        parent: ["锁子甲", "锁子甲"]
    },
    {
        label: "破刃者",
        en: "破刃者",
        level: 2,
        info: ["攻击时有几率让目标造成缴械效果"],
        parent: ["锁子甲", "负极斗篷"]
    },
    {
        label: "红BUFF",
        en: "红BUFF",
        level: 2,
        info: ["攻击燃烧目标2.5%最大生命值，且被燃烧的目标无法恢复生命值"],
        parent: ["锁子甲", "巨人腰带"]
    },
    {
        label: "骑士之誓",
        en: "骑士之誓",
        level: 2,
        info: ["获得骑士身份"],
        parent: ["锁子甲", "金铲子"]
    },
    {
        label: "巨龙之爪",
        en: "巨龙之爪",
        level: 2,
        info: ["获得83%对魔法伤害的抗性"],
        parent: ["负极斗篷", "负极斗篷"]
    },
    {
        label: "灵风",
        en: "灵风",
        level: 2,
        info: ["在战斗开始时放逐一名敌人"],
        parent: ["负极斗篷", "巨人腰带"]
    },
    {
        label: "卢安娜的飓风",
        en: "卢安娜的飓风",
        level: 2,
        info: ["攻击时会额外瞄准2个敌人，造成50%伤害"],
        parent: ["负极斗篷", "金铲子"]
    },
    {
        label: "狂徒铠甲",
        en: "狂徒铠甲",
        level: 2,
        info: ["携带者每秒回复5%最大生命值"],
        parent: ["巨人腰带", "巨人腰带"]
    },
    {
        label: "冰霜之锤",
        en: "冰霜之锤",
        level: 2,
        info: ["获得极地身份"],
        parent: ["巨人腰带", "金铲子"]
    },
    {
        label: "自然之力",
        en: "自然之力",
        level: 2,
        info: ["+1人口"],
        parent: ["金铲子", "金铲子"]
    },
    {
        label: "暴风大剑",
        en: "baofengdajian",
        level: 1,
        info: ["+20攻击"],
        sort: 1
    },
    {
        label: "反曲之弓",
        en: "fanquzhigong",
        level: 1,
        info: ["+20%攻速"],
        sort: 2
    },
    {
        label: "无用大棒",
        en: "wuyongdabang",
        level: 1,
        info: ["+20%技能伤害"],
        sort: 3
    },
    {
        label: "女神之泪",
        en: "nvshenzhilei",
        level: 1,
        info: ["+20法力值"],
        sort: 4
    },
    {
        label: "锁子甲",
        en: "suozijia",
        level: 1,
        info: ["+20护甲"],
        sort: 5
    },
    {
        label: "负极斗篷",
        en: "fujidoupeng",
        level: 1,
        info: ["+20魔抗"],
        sort: 6
    },
    {
        label: "巨人腰带",
        en: "巨人腰带",
        level: 1,
        info: ["+200生命"],
        sort: 7
    },
    {
        label: "魔尘",
        en: "mochen",
        level: 1,
        info: ["+5全属性"],
        sort: 8
    }
];