<template>
  <section>
    <div class="loading" v-if="isLoading">
      <span>Loading...</span>
    </div>
  </section>
</template>


<script>
export default {
  name: "Loading",
  props:["time"],
  data() {
    
    return {
      isLoading: true
    };
  },

  mounted() {
      this.init()
  },

  methods: {
      init(){
          setTimeout(()=>{
              this.isLoading = false;
          },this.time)
      }
  }
};
</script>
<style lang="sass" scoped>
section 
    margin: 0
    padding: 0
    height: 100vh
    display: flex
    align-items: center
    justify-content: center

.loading 
    width: 200px
    height: 200px
    box-sizing: border-box
    border-radius: 50%
    border-top: 10px solid #E74C3C
    position: relative
    animation: a1 2.5s linear infinite

.loading::before , .loading::after 
    content: ''
    width: 200px
    height: 200px
    position: absolute
    left: 0
    top: -10px
    border-radius: 50%
    box-sizing: border-box

.loading::before 
    border-top: 10px solid #3498DB
    transform: rotate(120deg)

.loading::after 
    border-top: 10px solid #F1C40F
    transform: rotate(240deg)

.loading span 
    position: absolute
    width: 200px
    height: 200px
    color: #fff
    font-size: 18px
    line-height: 200px
    margin-left: -100px
    animation: a2 2.5s linear infinite

@keyframes a1 
    to 
        transform: rotate(360deg)

@keyframes a2
    to 
        transform: rotate(-360deg)

</style>