<template>
  <section>
    <div v-for="(item,index) in story" :key="index">
      <div class="header">
        <h1>{{item.name}}</h1>
      </div>
      <div style="color:white;text-align:left;width:60%;font-size:20px">
        <p v-for="(per,pindex) in item.content" :key="pindex">
            &nbsp;&nbsp;{{per}}
            </p>
      </div>
    </div>
  </section>
</template>
<script>
import { story } from "./story.js";
export default {
  data() {
    return {
      story: story,
      menu: [
        {
          lookupCode: "wuxia",
          meaning: "武侠"
        },
        {
          lookupCode: "love",
          meaning: "爱情"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>

</style>