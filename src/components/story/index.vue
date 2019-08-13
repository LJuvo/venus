<template>
  <div class="story">
    <h2>Story from {{text}}</h2>
    <jiban-model v-show="text=='jiban'"></jiban-model>
    <h2 v-show="text!='jiban'">Story from {{text}}</h2>
  </div>
</template>

<script>
import jibanModel from "./jiban";
export default {
  name: "story",
  components: { jibanModel },
  data() {
    return {
      storyState: "",
      text: ""
    };
  }
};
</script>
