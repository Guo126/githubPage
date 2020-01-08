<template>
  <div class="main">
    <div class="back">
      <a-button type="primary" ghost @click="goBack()">
        <a-icon type="left" />返回
      </a-button>
    </div>

    <loading></loading>
  </div>
</template>
<script>
import Loading from "../../../base/Loading";

export default {
  data() {
    return {};
  },
  components: { loading: Loading },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.main {
  background: rgb(23, 31, 49);
}
.back {
  position: fixed;
   padding: 2rem 0 0 6rem;

  text-align: left;
}
</style>