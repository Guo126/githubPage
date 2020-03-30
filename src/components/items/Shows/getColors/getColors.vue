<template>
  <section class="main">
    <section class="main">
      <div class="line">
        <div class="back">
          <div @click="goBack()" class="back-button">
            <a-icon type="left" />&nbsp;BACK
          </div>
        </div>
      </div>
      <a-row>
        <a-col v-for="(color,index) in colors" :key="index">
          <section class="color-row">
            <div
              class="color-card"
              v-for="(item,cindex) in color"
              :key="cindex"
              @click="getColor(item.code)"
            >
              <span>{{item.name}}</span>
            </div>
          </section>
        </a-col>
      </a-row>
      <div class="line line-foot">
        <span>Copy By Flat UI Palette</span>
      </div>
    </section>
    <section class="main top">
      <div class="middle">
        <span></span>
      </div>
    </section>
  </section>
</template>
<script>
import { colors, slogan } from "./colors";
import Clipboard from "clipboard";
export default {
  data() {
    return {
      colors: colors,
      slogan: slogan,
      curColor: '',
    };
  },

  mounted() {
    this.setColor();
  },

  methods: {
    goBack() {
      this.$router.push("/colorfulLife/list");
    },
    getColor(code) {
      this.curColor = code;
      var clipboard = new Clipboard(".color-card", {
        //复制剪贴板
        text: function() {
          return code;
        }
      });

      clipboard.on("success", function(e) {
        //console.log(e);
        
        clipboard.destroy();
      });
      this.openNotification();
    },
    setColor() {
      let cards = document.querySelectorAll(".color-card");

      cards.forEach((item, index) => {
        //设置背景色
        item.style.backgroundColor = this.colors[parseInt(index / 5)][
          parseInt(index % 5)
        ].code;
      });
    },
    openNotification () {
        this.$notification.open({
          message: `${this.curColor}!`,
          duration: 2 ,
          description: 'GOT IT !',
          icon: <a-icon type="smile" style="color: rgb(17, 233, 53)" />,
          
        });
      },
  }
};
</script>
<style lang="scss" scoped>
@import "./getColors.scss";
</style>
