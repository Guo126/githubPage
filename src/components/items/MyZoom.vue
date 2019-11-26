<template>
  <section class="container" :class="className">
    <div class="outDiv">
      <a-card
        v-for="(item,index) in menu"
        :key="index"
        class="card"
        :style="{'background':'url('+item.img +')','background-size':'cover'}"
        @click="selectType(item)"
      >
       <a-button  ghost style="margin-top:40%" @click="toStory(item)"> {{item.meaning}}<a-icon type="arrow-right" /> </a-button>
      </a-card>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      menu: [
        {
          lookupCode: "wuxia",
          img: "/static/imgs/wuxia2.jpg",
          meaning: "武侠"
        },
        {
          lookupCode: "magic",
          img: "/static/imgs/magic.jpg",

          meaning: "奇幻"
        },
        {
          lookupCode: "valley",
          img: "/static/imgs/bg.jpg",

          meaning: "民间"
        },
        {
          lookupCode: "history",
          img: "/static/imgs/history.jpg",

          meaning: "历史"
        },
        {
          lookupCode: "love",
          img: "/static/imgs/love.jpg",

          meaning: "情感"
        }
      ],
      className: ""
    };
  },

  methods: {
    //点击分类切换背景图
    selectType(item) {
      this.className = item.lookupCode;
    },
    //点击进入不同分类的故事
    toStory(item){
       this.$router.push({name:'MyStory',params:{tag:item.lookupCode}})
     // this.$router.push('/readStory/'+ item.lookupCode)
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  position: absolute;
  height: 100%;
  width: 100%;
  background: url("/static/imgs/bg.jpg");
  background-size: cover;
  padding: 7rem 2rem 0rem 2rem;
  .outDiv {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
}
.card {
  width: 12%;
  height: 80%;
  text-align: center;
  font-size: 2rem;
  cursor: pointer;
  color: white;
  line-height: 100%;
  font-weight: 900;
  border-radius: 10px;
  opacity: 0.5;
}
.card:hover {
  margin-left: -5px;
  margin-top: -10px;
  // width: calc(13% + 10px);
  width: 80%;
  height: calc(80% + 20px);
  opacity: 1;
}

.wuxia {
  background: url("/static/imgs/wuxia2.jpg");
  background-size: cover;
}
.magic {
  background: url("/static/imgs/magic.jpg");
  background-size: cover;
}
.valley {
  background: url("/static/imgs/bg.jpg");
  background-size: cover;
}
.history {
  background: url("/static/imgs/history.jpg");
  background-size: cover;
}
.love {
  background: url("/static/imgs/love.jpg");
  background-size: cover;
}
</style>