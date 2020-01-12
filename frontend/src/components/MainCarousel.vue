<template>
  <section
    class="font-sans h-screen w-full bg-gray-900 text-center flex flex-col items-center justify-center"
  >
    <div id="particles-js" class="w-full h-full absolute"></div>
    <div id="content" class="w-full">
      <h3
        class="text-white mx-auto max-w-sm mt-4 font-normal text-2xl leading-normal"
      >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, aut!</h3>
      <h3
        class="text-white mx-auto max-w-sm mt-4 font-normal text-2xl leading-normal"
      >Your HIGHNESS deserves THE BEST.</h3>
    </div>
    <!--style="background:url('https://i.imgur.com/WHDX6c4.gif') no-repeat center; background-size: cover;"-->
    <!-- https://source.unsplash.com/random/1920x1080 -->
  </section>
</template>

<style>
</style>

<script>
export default {
  data() {
    return {
      particles: null
    }
  },
  mounted() {
    require("particles.js");

    window.particlesJS.load("particles-js", "particles.json", function() {
      console.log("Callback - particles.js config loaded");
    });

    /*particlesJS.load("particles-js", "particles.json", function() {
      console.log("Callback - particles.js config loaded");
    });*/
  }
};
</script>