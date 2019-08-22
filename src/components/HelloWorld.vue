<template>
  <div class="hello">
    <a-back-top />
    <!-- ============head ==================== -->
    <div class="head">
      <div class="head-content">
        <div class="head-content-head flex-row">
          <img src="/static/imgs/title.png" />
          <div class="flex-row hori-center" style="margin-left:auto">
            <div class="nav-button" >
              <h1>首页</h1>
            </div>
            <div class="nav-button" @click="goto(700)">
              <h1>关于</h1>
            </div>
            <div class="nav-button">
              <h1>联系我们</h1>
            </div>
          </div>
          <div class="hori-center" style="margin-left:2rem;">
            <a-button type="primary" size="large" >登录 / 注册</a-button>
          </div>
        </div>
        <div class="head-content-middle">
          我愿
          <br/>我的脚步留痕天下
        </div>
      </div>
      <div style=" position: relative;">
        <a-carousel autoplay effect="fade" dots="false">
          <div v-for="(item,index) in imgs" :key="index">
            <img :src="item.src" width="100%" height="800px" />
          </div>
        </a-carousel>
      </div>
    </div>
    <!-- ============body ==================== -->
    <div id="body" class=" body" >
      <div class="head body-one flex-row" style="height:600px">
        <div>

        </div>
        <div class="body-bg">

        </div>
      </div>
      <div class="head body-two">

      </div>
    </div>

    <!-- =================foot================= -->
    <div id="foot" class="head foot">

    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      winHeight: window.innerHeight,
      is_bg: true,
      imgs: [
        { src: "/static/imgs/banner1.jpg" },
        { src: "/static/imgs/banner2.jpg" },
        { src: "/static/imgs/banner3.jpg" },
        { src: "/static/imgs/banner4.jpg" }
      ],
      step: {
        //此数据是控制动画快慢的
        type: Number,
        default: 50
      }
    };
  },
  mounted() {
    // this.$refs.head.style.height = this.winHeight + "px";
    this.$refs.head.style.height = document.body.scrollWidth;
    //this.changeBg();
  },
  created() {},
  methods: {
    changeBg() {
      // this.$refs.head.style.backgroundImage = "url('../assets/imgs/title.png')";
      setInterval(() => {
        this.is_bg = !this.is_bg;
      }, 4000);
    },

    goto(target) {
      let distance =
        document.documentElement.scrollTop || document.body.scrollTop; //获得当前高度
      let step = target / 50; //每步的距离   
      (function jump() {
        if (distance <= target) {
          distance += step;
          window.scrollTo(0, distance);
          setTimeout(jump, 16);
        }
      })();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.head-content-middle {
  font-size: 4rem;
  font-weight: 500;
  color: rgb(255, 255, 255);
}
.body-bg {
  background-color: aquamarine;
}
.hello {
  position: relative;
}
.ant-carousel >>> .slick-slide {
  text-align: center;
  overflow: hidden;
}

.hori-center {
  margin: auto 0;
}
.ver-center {
  margin: 0 auto;
}
.nav-button {
  /* padding: 0.3rem; */
  border-radius: 4px;
  margin-left: 0.7rem;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  cursor: pointer;
}
.nav-button:hover {
  background: #ffffff;
}
.nav-button > h1:hover {
  color: rgba(0, 0, 0, 0.726);
}
h1 {
  font-size: 1.4rem;
  color: rgb(255, 255, 255);
  font-weight: 600;
  font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
  margin: 0;
}
.head-content {
  z-index: 3;
  position: fixed;

  padding: 1rem;
  height: 100%;
  width: 100%;
}
.flex-col {
  display: flex;
  flex-direction: column;
}
.flex-row {
  display: flex;
  flex-direction: row;
  /* justify-items: center; */
}
.header {
  width: 100%;
  background-repeat: no-repeat;
}
</style>
