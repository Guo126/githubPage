<template>
  <div class="main">
    <div class="back">
            <div @click="goBack()"  class="back-button">
              <a-icon type="left" />&nbsp;BACK
            </div>
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
      this.$router.push('/colorfulLife/list');
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
.back-button {
  padding: 5px 8px;
  cursor: pointer;
  color: #fff;
  font-weight: 500;
  outline: none;
  border: none;
  font-size: 18px;
}
</style>