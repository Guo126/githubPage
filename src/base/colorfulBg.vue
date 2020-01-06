<template>
  <section class="colorful-bg">
    <slot></slot>
  </section>
</template>
<script>
export default {};
</script>
<style lang="sass" scoped>
    .colorful-bg 
        margin: 0
        padding: 0
        min-height: 100vh
        font-family: "montserrat"
        background-image: linear-gradient(125deg,#2c3e50,#27ae60,#2980b9,#e74c3c,#8e44ad)
        background-size: 400%
        animation: bganimation 20s infinite

    @keyframes bganimation 
        0% 
            background-position: 0% 50%

        50% 
            background-position: 100% 50%

        100% 
            background-position: 0% 50%

</style>