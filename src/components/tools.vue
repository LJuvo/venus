<template>
  <div class="tools-pane">
    <div class="tools-pane-drag"></div>
    <div class="tools-wrapper">
      <a
        class="tools-btn"
        v-for="(item,key) in toolsArr"
        :key="key"
        @click="createWindows(item)"
      >{{item.label}}</a>
      <a class="tools-btn" @click="onCloseAll">关闭</a>
    </div>
  </div>
</template>

<script>
const BrowserWindow = require("electron").remote.BrowserWindow;
const { ipcRenderer: ipc, screen: screen } = require("electron");
export default {
  name: "tools",
  data() {
    return {
      toolsArr: [
        // { label: "全部", url: "index", icon: "", width: 300, height: 120 },
        {
          label: "羁绊",
          url: "card",
          icon: "",
          width: 300,
          height: 120,
          x: screen.getPrimaryDisplay().workAreaSize.width - 340 - 20,
          y: 260
        },
        {
          label: "职业",
          url: "vocation",
          icon: "",
          width: 300,
          height: 120,
          x: screen.getPrimaryDisplay().workAreaSize.width - 340 - 20,
          y: 120
        },
        {
          label: "武器",
          url: "weapon",
          icon: "",
          width: 260,
          height: 80,
          x: screen.getPrimaryDisplay().workAreaSize.width - 300 - 20,
          y: 20
        }
      ]
    };
  },
  mounted() {},
  methods: {
    createWindows(ele) {
      let win = new BrowserWindow({
        width: ele.width,
        height: ele.height,
        transparent: true,
        frame: false,
        useContentSize: true,
        alwaysOnTop: true
      });

      if (ele.x && ele.y) win.setPosition(ele.x, ele.y);

      win.on("close", function() {
        win = null;
      });
      win.loadURL(`file://${__dirname}/../` + ele.url + `.html`);
      win.show();

      win.setAlwaysOnTop(true, "screen-saver", 99999999999999);
    },
    onCloseAll() {
      ipc.send("close");
    }
  }
};
</script>