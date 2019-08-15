<template>
  <div class="tools-pane">
    <Button
      v-for="(item,key) in toolsArr"
      :key="key"
      @click="createWindows(item.url)"
      @mouseover="item.show=true"
      @mouseleave="item.show=false"
    >
      {{item.label}}-
      <span v-show="item.show">{{item.url}}</span>
    </Button>
  </div>
</template>

<script>
const BrowserWindow = require("electron").remote.BrowserWindow;
export default {
  name: "tools",
  data() {
    return {
      toolsArr: [
        { label: "全部", url: "index", icon: "" },
        { label: "羁绊", url: "card", icon: "" },
        { label: "职业", url: "vocation", icon: "" }
      ]
    };
  },
  mounted() {},
  methods: {
    createWindows(val) {
      let win = new BrowserWindow({
        width: 300,
        height: 120,
        transparent: true,
        frame: false,
        useContentSize: true,
        alwaysOnTop: true
      });

      win.on("close", function() {
        win = null;
      });
      win.loadURL(`file://${__dirname}/../` + val + `.html`);
      win.show();

      win.setAlwaysOnTop(true, "screen-saver", 99999999999999);
    }
  }
};
</script>