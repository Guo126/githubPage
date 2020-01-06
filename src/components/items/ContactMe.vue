<template>
  <section>
    <section class="main">
      <loading v-if="isLoading"></loading>
      <section class="content">
        <div class="card" v-for="(item,index) in items" :key="index" >
          
        </div>
      </section>
    </section>
    <!-- <section class="flex-col">
      <div>
        <a-card title="Card Title">
          <a href="#" slot="extra">more</a>
          <p>{{this.$store.state.num}}</p>
          <p>{{this.$store.getters.getNum}}</p>
          <button @click="addOne()">点击</button>
          <button @click="async()">异步</button>
        </a-card>
      </div>
      
    </section>-->
  </section>
</template>
<script>
import Loading from "../../base/Loading";
export default {
  data() {
    return {
      isLoading: true,
      time: 3000,
      items: [
        {
          title: "炫酷Loading动画",
          img: "./static/imgs/cool_loading.png"
        }
      ]
    };
  },
  mounted() {
    this.setImg();
    setTimeout(() => {
      
      this.isLoading = false;
    }, this.time);
  },
  components: {
    loading: Loading
  },
  methods: {
    setImg() {
      let cards = document.getElementsByClassName("card");
      cards.forEach((item,index)=>{
        item.style.backgroundImage = this.items[index].img
      })
    },
    addOne() {
      this.$store.commit("addOne", 1);
    },
    async() {
      this.$store.dispatch("addOneAsync", 2);
    }
  }
};
</script>
<style scoped>
.flex-row {
  display: flex;
  flex-direction: row;
}
.flex-col {
  display: flex;
  flex-direction: column;
}
.main {
  background: linear-gradient(40deg, #df8d57, #45df97);
  background-size: cover;
  width: 100%;
  height: 100%;
  z-index: -1;
  position: fixed;
}
.content {
  padding: 5rem;
  display: flex;
  flex-direction: column;
  justify-items: center
}

.card {
  width: 300px;
  height: 160px
}
</style>