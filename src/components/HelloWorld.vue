<template>
  <div class="hello">
    <a-back-top />
    <!-- ============head ==================== -->
    <div id="header" class="head">
      <div class="head-content">
        <div class="head-content-head flex-row">
          <img src="/static/imgs/title.png" />
          <div class="flex-row hori-center" style="margin-left:auto">
            <div class="nav-button" @click="goTop()">
              <h1>首页</h1>
            </div>
            <div class="nav-button" @click="goAbout('header')">
              <h1>关于</h1>
            </div>
            <div class="nav-button">
              <h1>联系我们</h1>
            </div>
          </div>
          <div class="hori-center" style="margin-left:3rem;">
            <a-button type="primary" size="large" @click="visible = 'true'">登录 / 注册</a-button>
            <a-modal
           
              title="Title"
              :visible="visible"
              @ok="handleOk"
              :confirmLoading="confirmLoading"
              @cancel="handleCancel"
            >
              <div  class="modal">
                
              </div>
            </a-modal>
          </div>
        </div>
      </div>
      <div>
        <div class="head-content-middle flex-col">
          <div class="text-head">Trip</div>
          <div class="line"></div>
          <div class="text-foot">
            We've been traveling,
            waiting for someone to be the partner of our journey, to accompany us through a memory that no one else can replace
          </div>
          <br />
        </div>
        <a-carousel autoplay effect="fade" :dots="false">
          <div v-for="(item,index) in imgs" :key="index">
            <img :src="item.src" width="100%" height="800px" />
          </div>
        </a-carousel>
      </div>
    </div>
    <!-- ============body ==================== -->
    <div id="body" class="body">
      <div class="body-one flex-row">
        <div class="img-bg" style="width:40%"></div>
        <div class="body-bg flex-col" style="width:60%">
          <div class="in-block">
            <h3>About Me</h3>
            <div class="line"></div>
            <h1>仰望星空 脚踏实地</h1>
            <div class="text-middle">
              Dreaming is the easy part. Acting on the dream is harder.
              Recognize that a dream is a journey. On the simplest level, it takes commitment, time, desire, and courage.
              But rarely is something great easily realized.
              Dreaming is recognizing and embracing the potential for greatness and seeking it in all areas of your life.
              Believe in your dreams and your ability to accomplish them. Keep your dreams in front of you.
              I'm here to challange you to reach for your dream.
              Do not be afraid to dream. Never forget, if you can dream it, you can do it!
            </div>
          </div>
        </div>
      </div>
      <div class="head flex-row">
        <div class="body-bg2 flex-col" style="width:40%">
          <div class="in-block">
            <h3>STEPS</h3>
            <div class="line"></div>
            <h1>仰望星空 脚踏实地</h1>
            <div class="text-middle">
              Dreaming is the easy part. Acting on the dream is harder.
              Recognize that a dream is a journey. On the simplest level, it takes commitment, time, desire, and courage.
              But rarely is something great easily realized.
              Dreaming is recognizing and embracing the potential for greatness and seeking it in all areas of your life.
              Believe in your dreams and your ability to accomplish them. Keep your dreams in front of you.
              I'm here to challange you to reach for your dream.
              Do not be afraid to dream. Never forget, if you can dream it, you can do it!
            </div>
          </div>
        </div>
        <div class="img-bg2" style="width:60%"></div>
      </div>
    </div>

    <!-- =================foot================= -->
    <div id="foot" class="foot flex-row">
      <div class="icons-list flex-row">
        <a-icon type="weibo-square" class="foot-icon" />
        <a-icon type="github" class="foot-icon" />
        <a-icon type="twitter" class="foot-icon" />
        <a-icon type="facebook" class="foot-icon" />
      </div>
      <div style="margin-left:auto">
        <p>Copyright © 2019.guowenhao. All rights reserved</p>
      </div>
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
      visible :false,
      confirmLoading :false,
      step: {
        //此数据是控制动画快慢的
        type: Number,
        default: 50
      },
      
    };
  },
  mounted() {
    // this.$refs.head.style.height = this.winHeight + "px";
    this.$refs.head.style.height = document.body.scrollWidth;
  },
  created() {},
  methods: {
    handleOk(e) {
      this.ModalText = 'The modal will be closed after two seconds';
      this.confirmLoading = true;
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading = false;
      }, 2000);
    },
    handleCancel(e) {
      console.log('Clicked cancel button');
      this.visible = false
    },
    goTop() {
      let distance =
        document.documentElement.scrollTop || document.body.scrollTop; //获得当前高度

      let step = distance / 50; //每步的距离
      (function jump() {
        if (distance > 0) {
          distance -= step;
          window.scrollTo(0, distance);
          setTimeout(jump, 16);
        }
      })();
    },
    goAbout(target) {
      let distance =
        document.documentElement.scrollTop || document.body.scrollTop; //获得当前高度
      target = document.getElementById(target).scrollHeight;
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
.modal {
  background: #00000021
}
.foot-icon {
  font-size: 1.4rem;
  margin-left: 0.7rem;
  cursor: pointer;
}
.foot {
  height: 4rem;
  background-color: black;
  color: #ffffff;
  padding: 1rem 10rem;
  justify-items: center;
}
.text-middle {
  line-height: 2rem;
  text-align: right;
  /* padding-top: 5rem; */
  padding: 10% 0 20% 25%;
  margin: 0 auto;
  font-size: 1rem;
  font-weight: 400;
  width: 100%;
  color: #ffffff;
}
.in-block {
  text-align: left;
  line-height: 1.5rem;
}

h3 {
  font-size: 3rem;
  font-weight: 600;
  color: #ffffff;
}
.body-one {
  height: 600px;
}
.img-bg {
  background-image: url("/static/imgs/banner2.jpg");
  background-size: cover;
}
.img-bg2 {
  background-image: url("/static/imgs/banner4.jpg");
  background-size: cover;
}
.line {
  border: 4px solid #ffffff;
}

.head-content-middle {
  margin: 20% auto auto 20%;
  line-height: 1.5rem;
  z-index: 2;
  position: absolute;
}
.text-head {
  font-size: 7rem;
  font-weight: 500;
  color: rgb(255, 255, 255);
}
.text-foot {
  width: 50%;
  margin: 0 auto;
  margin-top: 3rem;
  font-size: 1rem;
  font-weight: 400;
  color: rgb(255, 255, 255);
}
.body-bg {
  background-color: rgb(46, 196, 182);
  padding: 3rem 8rem 2rem 1rem;
}
.body-bg2 {
  background-color: rgb(46, 196, 182);
  padding: 9rem 8rem 2rem 1rem;
}
.hello {
  position: relative;
  /* background-color: black; */
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
  z-index: 2;
  position: fixed;
  padding: 1rem;
  height: 100%;
  width: 100%;
}
.head-content-head {
}
.head-content-content {
  position: absolute;
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
