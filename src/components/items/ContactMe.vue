<template>
  <section>
    <section class="main"></section>
    <section class="flex-col">
      <div>
        <a-card title="Card Title">
          <a href="#" slot="extra">more</a>
          <p>card content</p>
          <p>card content</p>
          <p>card content</p>
        </a-card>
      </div>
       <div>
        <a-card title="Card Title">
          <a href="#" slot="extra">more</a>
          <p>card content</p>
          <p>card content</p>
          <p>card content</p>
        </a-card>
      </div>
       <div>
        <a-card title="Card Title">
          <a href="#" slot="extra">more</a>
          <p>card content</p>
          <p>card content</p>
          <p>card content</p>
        </a-card>
      </div>
      <div class="row">
           <p>card content</p>
          <p>card content</p>
          <p>card content</p>
           <p>card content</p>
          <p>card content</p>
          <p>card content</p>
      </div>
       <div>
        <a-card title="Card Title">
          <a href="#" slot="extra">more</a>
          <p>card content</p>
          <p>card content</p>
          <p>card content</p>
        </a-card>
      </div>
       <div>
        <a-card title="Card Title">
          <a href="#" slot="extra">more</a>
          <p>card content</p>
          <p>card content</p>
          <p>card content</p>
        </a-card>
      </div>
       <div>
        <a-card title="Card Title">
          <a href="#" slot="extra">more</a>
          <p>card content</p>
          <p>card content</p>
          <p>card content</p>
        </a-card>
      </div>
    </section>
  </section>
</template>
<script>
export default {};
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
  background: no-repeat url("/static/imgs/banner2.jpg");
  background-size: cover;
  width: 100%;
  height: 100%;
  z-index: -1;
  position: fixed;
}
.row {
  width: 100%;
  height: 900px;
  /* background: transparent */
  background: no-repeat url('/static/imgs/mask.png');
  background-size:cover
}
</style>