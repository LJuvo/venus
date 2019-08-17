<template>
  <div class="card">
    <div class="card-pane">
      <h2 class="card-pane-title">
        <span style="flex:1;font-size:14px;">{{checkObj.label?checkObj.label:"-"}}</span>
        <img class="weapon-main-img" :src="'./assets/weapon/'+checkObj.en+'.jpg'" />
        <img class="weapon-check-img" :src="'./assets/weapon/'+checkObj.parent[0]+'.jpg'" />
        <img class="weapon-check-img" :src="'./assets/weapon/'+checkObj.parent[1]+'.jpg'" />
      </h2>
      <p v-for="(item,key) in checkObj.info" :key="key">{{item}}</p>
    </div>
    <div class="card-list-pane">
      <div class="card-list">
        <a
          class="card-list-item"
          v-for="(item,i) in cardArr"
          :key="i"
          @click="checkFetter(i)"
          :title="item.label"
          @mouseover="item.hover=true"
          @mouseleave="item.hover=false"
        >
          <img :src="'./assets/weapon/'+item.en+'.jpg'" />
          <div class="card-list-item-abs" v-show="item.hover">
            <img class="weapon-basic-img" :src="'./assets/weapon/'+item.parent[0]+'.jpg'" />
            <img class="weapon-basic-img" :src="'./assets/weapon/'+item.parent[1]+'.jpg'" />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { weapon } from "../../data/api";
export default {
  name: "weapon",
  data() {
    return {
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
      let weaponArr = [];
      weapon.forEach(ele => {
        if (ele.level == 2) weaponArr.push(ele);
      });
      this.cardArr = weaponArr;
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
