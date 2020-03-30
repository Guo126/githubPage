<template>
  <section>
    <!-- 时间轴电影 -->
    <a-timeline mode="alternate">
      <a-timeline-item v-for="(item,index) in movies" :key="index" color="blue">
        {{item.time}}
        <br />
        <br />
        <div class="part" @click="sendDetails(item)">
          <div class="partt" v-if="index % 2 != 0">
            <strong>{{item.name}}({{item.year}})</strong>

            <span>
              <a-rate
                :value="parseInt(item.star/2) + parseFloat((item.star - parseInt(item.star/1)) > 0.5 ? 0.5 : 0)" :disabled="true"
                :allowHalf="true"
              />

              <span class="ant-rate-text">{{item.star}}</span>
            </span>
            <br />
            <p>
              类型：
              <strong>{{item.type}}</strong>
            </p>
            <p>
              地区：
              <strong>{{item.country}}</strong>
            </p>
            <p>
              演员：
              <strong>{{item.actors}}</strong>
            </p>
          </div>
          <img v-lazy="item.poster" width="135px" height="194px" />
          <div class="partt" v-if="index % 2 == 0">
            <strong>{{item.name}}({{item.year}})</strong>

            <span>
              <a-rate
                :value="parseInt(item.star/2) + parseFloat((item.star - parseInt(item.star/1)) > 0.5 ? 0.5 : 0)" :disabled="true"
                :allowHalf="true"
              />

              <span class="ant-rate-text">{{item.star}}</span>
            </span>
            <br />
            <p>
              类型：
              <strong>{{item.type}}</strong>
            </p>
            <p>
              地区：
              <strong>{{item.country}}</strong>
            </p>
            <p>
              演员：
              <strong>{{item.actors}}</strong>
            </p>
          </div>
        </div>
      </a-timeline-item>
    </a-timeline>

    <div>
      <a-back-top />
      <strong style="color: rgba(64, 64, 64, 0.6)"></strong>
    </div>
  </section>
</template>
<script>
import movies from "./movieInfo";
export default {
  data() {
    return {
      movies: movies
    };
  },
  mounted() {
    this.movies[0]['count'] = this.movies.length;
    this.sendDetails(this.movies[0]);
  },
  methods: {
    sendDetails(item){
      this.$emit('sendMovie',item);
    }
  }
};
</script>
<style lang="scss" scoped>
section {
  margin: 0;
  padding: 10px;
}
.part {
  cursor: pointer;
  display: flex;
  justify-items: center;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  .partt {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 1px 7px;
  }
}
</style>