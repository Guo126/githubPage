<template>
 
    
    <!-- <div style="height: 30%;width:100%;"> -->
      <router-view></router-view>
    <!-- </div> -->
   
    <!-- <colorful> -->
      <!-- <button @click="toCard()">click</button> -->

      <!-- <loading :time="time"></loading> -->

      <!-- <a-row :gutter="16">
        <a-col :span="8">
          <a-card v-for="(item,index) in items" :key="index" title="item.title" :bordered="false">
            <img :src="item.img" />
          </a-card>
        </a-col>
      </a-row> -->

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
    <!-- </colorful> -->
 
</template>
<script>

export default {
  
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
  /* height: 100%; */
  /* z-index: -1; */
  position: fixed;
}
.row {
  width: 100%;
  height: 900px;
  /* background: transparent */
  background: no-repeat url("/static/imgs/mask.png");
  background-size: cover;
}
</style>