<template>
  <section>
    <div :class="[{'preloader':true,'active':active}]">
      <div ref="num" :class="[{'count':true,'hide':hide}]">0</div>
    </div>
    <!-- <colorful>
      <button @click="toCard()">click</button>
    </colorful> -->
  </section>
</template>
<script>
import Loading from "../../../base/Loading";
import ColorBg from "../../../base/colorfulBg";
export default {
  data() {
    return {
      time: 3000,
      hide: false,
      active: false,
      items: [
        {
          title: "炫酷Loading动画",
          img: ""
        }
      ]
    };
  },
  components: {
    loading: Loading,
    colorful: ColorBg
  },
  mounted() {
    this.load();
  },
  methods: {
    addOne() {
      this.$store.commit("addOne", 1);
    },
    async() {
      this.$store.dispatch("addOneAsync", 2);
    },
    toCard() {
      this.$router.push("/colorfulLife/cardHover");
    },
    load() {
      let numDiv = this.$refs.num;
      let counter = setInterval(() => {
        let num = parseInt(numDiv.textContent);
        numDiv.textContent = (++num).toString();
        if (num == 100) {
          clearInterval(counter);
          this.hide = true;
          this.active = true;
        }
      }, 30);
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.preloader {
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #070707;
  z-index: 100;
}

.preloader:before {
  position: absolute;
  content: "Loading";
  text-transform: uppercase;
  font-size: 12em;
  font-weight: 700;
  color: rgba(225, 225, 225, 0.03);
}

.active {
  transform: translateY(-100vh);
  transition: ease-in-out;
  transition-delay: 1s;
}

.count {
  position: relative;
  font-size: 16em;
  font-weight: 800;
  color: #fff;
  z-index: 1;
}

.count:after {
  content: "%";
  font-size: 0.5em;
}

.hide {
  opacity: 0;
  pointer-events: none;
  transition: 1s;
}
</style>