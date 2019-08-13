<template>
  <div class="jiban">
    <div class="jiban-content"></div>
    <div class="jiban-right">
      <div class="jiban-right-item" v-for="(item,key) in perArr" :key="key">
        <img :src="'./assets/story/basic/'+item.img+'.jpg'" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "story",
  data() {
    return {
      perArr: [
        {
          label: "元素使",
          img: "yuansushi",
          res: ["3个 — 在战斗开始时召唤一个元素之灵。", "", ""]
        },
        { label: "极地", img: "jidi" },
        { label: "帝国", img: "diguo" },
        { label: "恶魔", img: "emo" },
        { label: "贵族", img: "guizu" },
        { label: "海盗", img: "haidao" },
        { label: "机器人", img: "jiqiren" },
        { label: "暗影", img: "anying" },
        { label: "狂野", img: "kuangye" },
        { label: "浪人", img: "langren" },
        { label: "龙", img: "long" },
        { label: "忍者", img: "renzhe" },
        { label: "虚空", img: "xukong" },
        { label: "约德尔人", img: "yuedeerren" },
        { label: "刺客", img: "cike" },
        { label: "斗士", img: "doushi" },
        { label: "法师", img: "fashi" },
        { label: "护卫", img: "huwei" },
        { label: "换形师", img: "huanxingshi" },
        { label: "剑士", img: "jianshi" },
        { label: "骑士", img: "qishi" },
        { label: "枪手", img: "qiangshou" },
        { label: "游侠", img: "youxia" }
      ]
    };
  }
};
</script>