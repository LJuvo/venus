<template>
  <div class="card">
    <div class="card-pane">
      <h2>{{checkObj.label?checkObj.label:"-"}}</h2>
      <p v-for="(item,key) in checkObj.level" :key="key">{{item}}</p>
    </div>
    <div class="card-list">
      <a
        class="card-list-item"
        v-for="(item,i) in cardArr"
        :key="i"
        @click="checkFetter(i)"
        :title="item.label"
      >
        <img :src="'./assets/fetters/'+item.en+'.png'" />
      </a>
    </div>
  </div>
</template>

<script>
import { fetters, vocation } from "../../data/api";
export default {
  name: "card",
  data() {
    return {
      text: "",
      cardType: "fetters",
      cardArr: [],
      checkObj: {}
    };
  },
  watch: {
    cardType(v) {
      this.initCard();
    }
  },
  mounted() {
    this.initCard();
  },
  methods: {
    initCard() {
      if (this.cardType == "fetters") this.cardArr = fetters;
      if (this.cardType == "vocation") this.cardArr = vocation;
      this.checkFetter(0);
    },
    checkFetter(index) {
      this.checkObj = this.cardArr[index];
      this.cardArr.forEach((ele, i) => {
        ele.checked = false;
        if (i == index) ele.checked = true;
      });
    }
  }
};
</script>
