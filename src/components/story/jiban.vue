<template>
  <div class="jiban">
    <div class="jiban-content"></div>
    <div class="jiban-right">
      <!-- <div class="jiban-right-btn">
        <button id="manage-window">弹窗</button>
        <div class="jiban-right-item">
          <img :src="'./assets/story/basic/'+selectImg+'.jpg'" />
        </div>
      </div>
      <div class="jiban-right-pane">-->
      <div class="jiban-right-item" v-for="(item,key) in perArr" :key="key">
        <img :src="'./assets/story/basic/'+item.img+'.jpg'" />
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
const BrowserWindow = require("electron").remote.BrowserWindow;
const path = require("path");
export default {
  name: "story",
  data() {
    return {
      selectImg: "yuansushi",
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
  },
  mounted() {
    //已下为插入内容

    const manageWindowBtn = document.getElementById("manage-window");

    manageWindowBtn.addEventListener("click", function(event) {
      const modalPath = path.join(
        "file://",
        __dirname,
        "../../views/story.html"
      );
      let win = new BrowserWindow({
        width: 400,
        height: 275,
        // transparent: true,
        // frame: false,
        useContentSize: true
      });

      win.on("resize", updateReply);
      win.on("move", updateReply);
      win.on("close", function() {
        win = null;
      });
      win.loadURL(modalPath);
      win.show();

      function updateReply() {
        const manageWindowReply = document.getElementById(
          "manage-window-reply"
        );
        const message = `Size: ${win.getSize()} Position: ${win.getPosition()}`;

        manageWindowReply.innerText = message;
      }
    });
  }
};
</script>