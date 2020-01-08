<template>
  <section>
      <!-- 循环渐变背景 -->
    <div v-if="origin=='colorBg'">
      <colorful>
        <div class="back">
          <a-button type="primary" ghost @click="goBack()">
            <a-icon type="left" />返回
          </a-button>
        </div>
      </colorful>
    </div>
    <!-- 霓虹按钮 -->
    <div v-if="origin=='colorBtn'" class="colorBtn">
        <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Cool Button
        </a>
       
    </div>
  </section>
</template>
<script>
import ColorBg from "../../../base/colorfulBg";

export default {
  data() {
    return {
      origin: ""
    };
  },
  mounted() {
      this.origin = this.$route.params.origin;
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },

  components: {
    colorful: ColorBg
  }
};
</script>
<style scoped>
.back {
  position: fixed;
  padding: 2rem 0 0 6rem;
  text-align: left;
}
.colorBtn {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100vh;
    background: #0b223a;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    font-family: consolas;
    
}
a {
    position: relative;;
    color: #2196f3;
    padding: 15px 30px;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 24px;
    overflow: hidden;
    transition: 0.2s;
    letter-spacing: 4px;
    
}

a:hover {
    color: #255784;
    background: #2196f3;
    box-shadow: 0 0 10px #2196f3 ,0 0 40px #2196f3 ,0 0 80px #2196f3 ,0 0 10px #2196f3 ;
    transition-delay: 1s;
}

a span {
    position: absolute;
    display: block;
}
a span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg,transparent,#2196f3)
}
a:hover span:nth-child(1) {
    left: 100%;
    transition: 1s;
}

a span:nth-child(2) {
    right: 0;
    top: -100%;
    width: 2px;
    height: 100%;
    background: linear-gradient(0deg,transparent,#2196f3);
}

a:hover span:nth-child(2) {
    top: 100%;
    transition: 1s;
    transition-delay: 0.25s;
}

a span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg,transparent,#2196f3);
}

a:hover span:nth-child(3) {
    right: 100%;
    transition: 1s;
    transition-delay: 0.5s;
}

a span:nth-child(4) {
    left: 0;
    bottom: -100%;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg,transparent,#2196f3);
}

a:hover span:nth-child(4) {
    bottom: 100%;
    transition: 1s;
    transition-delay: 0.75s;
}







</style>