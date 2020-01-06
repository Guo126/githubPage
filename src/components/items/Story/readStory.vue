<template>
  <section>
    <div class="main">
      <div class="card-outer">
        <a-card
          :bordered="false"
          v-for="(item,index) in story"
          :key="index"
          class="card"
          @click="showStory(item)"
        >
          <div class="card-inner">
            <div>
              <strong>{{item.name}}</strong>
              <span style="font-size:13px;margin-left:8px">作者：{{item.author}}</span>
            </div>
            <div>
              <a-rate :defaultValue="item.rate" allowHalf />
              <span>{{item.rate}}</span>
            </div>
          </div>
        </a-card>
      </div>
    </div>
    <div>
      <a-modal :title="c_story.name" v-model="visible" width="75%" :footer="null"	>
        <div style="color:black;text-align:left;width:92%;font-size:16px;padding:0 2rem">
          <p v-for="(per,pindex) in c_story.content" :key="pindex">&nbsp;&nbsp;{{per}}</p>
        </div>
      </a-modal>
    </div>
  </section>
</template>
<script>
import { story } from "../story.js";
export default {
  data() {
    return {
      story: story,
      c_story: {},
      visible: false
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let t_tag = this.$route.params.tag;
      this.story = this.story.filter(item => item.tag == t_tag);
      console.log(this.story);
    },
    showStory(item) {
      this.c_story = item;
      this.visible = true;
    }
  }
};
</script>
<style lang="scss" scoped>
section {
  position: absolute;
  height: 100%;
  width: 100%;
  .main {
    // height: 100%;
    width: 100%;
    padding: 2rem 4rem;
    background: #0e0e0e;
    .card-outer {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      .card {
        width: 80%;
        cursor: pointer;
        .card-inner {
          display: flex;
          font-size: 22px;
          align-content: space-between;
          justify-content: space-between;
        }
      }
    }
  }
}
</style>