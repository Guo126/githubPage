<template>
  <section class="main">
    <section class="container">
      <div class="card">
        
        <h2>润</h2>
      </div>
      <div class="card">
        <h2>物</h2>
      </div>
      <div class="card">
        <h2>细</h2>
      </div>
      <div class="card">
        <h2>无</h2>
      </div>
      <div class="card">
        <h2>声</h2>
      </div>
    </section>
  </section>
</template>
<script>
export default {
  methods: {}
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(
    0deg,
    #0b74cb 0%,
    #0b74cb 50%,
    #fff 50%,
    #fff 100%
  );
}

.container {
  max-width: 1000px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  transform-style: preserve-3d;
}

.container .card {
  position: relative;
  cursor: pointer;
  width: 180px;
  height: 240px;
  background: #fff;
  margin: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: 0.5s;
  overflow: hidden;
  transform-style: preserve-3d;
}

.container:hover .card {
  transform: perspective(500px) rotateY(30deg)
}

.container .card:hover {
  transform: perspective(500px) rotateY(0deg)
}

.container .card:hover ~ .card{
  transform: perspective(500px) rotateY(-30deg)
}


.container .card h2 {
  width: 65px;
  height: 65px;
  line-height: 65px;
  font-size: 2.5em;
  background: #318eda;
  color: #fff;
  text-align: center;
  border-radius: 50%;
  transition: box-shadow 0.5s;
}


.container .card:hover h2 {
  background: #fff;
  color: #318eda;
  cursor: pointer;
  box-shadow: 0 0 0 150px #318eda;
}
</style>