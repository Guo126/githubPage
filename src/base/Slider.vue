<template>
  <div style="position:relative">
    <div class="head-content-middle flex-col">
      <div class="text-head">Up</div>
      <div class="line"></div>
      <div class="text-foot">
        最怕一生碌碌无为，还说平凡难能可贵
        <!-- We've been traveling,
        waiting for someone to be the partner of our journey, to accompany us through a memory that no one else can replace-->
      </div>
      <br />
    </div>
    <a-carousel autoplay effect="fade" :dots="true">
      <div v-for="(item,index) in imgs" :key="index">
        <img :src="item.src" width="100%" height="750px" />
      </div>
    </a-carousel>
  </div>
</template>

<script>
export default {
  props: ["imgs"],
  data() {
    return {
      imgH: window.innerHeight
    };
  }
};
</script>

<style  scoped lang="scss">
.flex-col {
  display: flex;
  flex-direction: column;
}
.flex-row {
  display: flex;
  flex-direction: row;
}
@media screen and (min-width: 1000px) {
  .head-content-middle {
    line-height: 1.5rem;
    z-index: 2;
    position: absolute;
    width: 100%;
    height: 100%;
    .text-head {
      margin-top: 20%;
      font-size: 7rem;
      font-weight: 500;
      color: rgb(255, 255, 255);
    }
    .line {
      border: 4px solid #ffffff;
      margin: 0 20%;
    }
    .text-foot {
      width: 50%;
      margin: 0 auto;
      margin-top: 5rem;
      font-size: 2.4rem;
      font-weight: 500;
      color: rgb(255, 255, 255);
    }
  }
}

@media screen and (max-width: 600px) {
  .head-content-middle {
    line-height: 1.5rem;
    z-index: 2;
    position: absolute;
    width: 100%;
    height: 100%;
    .text-head {
      margin-top: 40%;
      font-size: 1rem;
      font-weight: 300;
      color: rgb(196, 20, 20);
    }
    .line {
      border: 2px solid #ffffff;
      margin: 0 10%;
    }
    .text-foot {
      width: 70%;
      margin: 0 auto;
      margin-top: 3rem;
      font-size: 1rem;
      font-weight: 300;
      color: rgb(255, 255, 255);
    }
  }
}
</style>