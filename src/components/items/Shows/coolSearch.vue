<template>
  <section class="container">
    <div class="back">
      <div @click="goBack()" class="back-button">
        <a-icon type="left" />&nbsp;BACK
      </div>
    </div>
    <div class="search-box">
      <input class="search-text" type="text" name placeholder="Search..." />
      <a class="search-btn" href="#">
        <a-icon type="search" />
      </a>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    goBack() {
      this.$router.push('/colorfulLife/list');
    }
  }
};
</script>
<style scoped>
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
.container {
  background: #2f3640;
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
}

.search-box {
  position: absolute;
  top: 46%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  height: 56px;
  border-radius: 56px;
  padding: 8px;
  display: flex;
  justify-items: center;
  justify-content: center;
  transition: 0.8s;
  /* box-shadow: 0 0 0 1000px  #2f3640 */
}

.search-box:hover {
  box-shadow: 0 0 0 1000px #e67e22;
  background: #2f3640;
}

.search-box:hover > .search-text {
  width: 300px;
  padding: 0;
}

.search-box:hover > .search-btn {
  background: #fff;
}

.search-text {
  border: none;
  background: none;
  outline: none;
  float: left;
  color: rgb(247, 249, 252);
  line-height: 56px;
  font-size: 17px;
  padding: 0;
  transition: 0.4s;
  width: 0px;
}

.search-btn {
  line-height: 40px;
  width: 40px;
  border-radius: 40px;
  font-size: 20px;
  color: #e67e22;
  float: right;
  transition: 0.4s;
}
</style>
