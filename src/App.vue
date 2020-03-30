<template>
  <div id="app">
      <router-view v-if="isRouterAlive" />

    <!-- <transition name="slide-fade" mode="out-in">
      <router-view v-if="isRouterAlive" />
    </transition> -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isRouterAlive: true,
      transition: "slide-right"
    };
  },
  mounted() {
    
    this.$store.commit("change",this.transition)
  },
  watch: {
    $route(to, from) {
      let isBack = this.$router.isBack;
      if (isBack) {
        this.transition = "slide-right";
      } else {
        this.transition = "slide-left";
      }
      this.$router.isBack = false;
    }
  },
  provide() {
    return {
      reload: this.reload
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #ffffff;
  height: 100%;
  width: 100%;
}
img {
  max-width: 100%;
}

::-webkit-scrollbar {
  display: none;
}


.slide-fade-enter-active {
  transition: all 1.7s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter
 {
  transform: translateX(50%);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(-50%);
  opacity: 0;
}
</style>
