<template>
  <Layout>
    <Main-Carousel />

    <section class="bg-white font-sans container m-auto text-center py-8">
      <label for="tagline" class="uppercase tracking-wide font-bold text-gray-700">Various Aspects</label>
      <h1 class="mt-2 mb-4 font-medium max-w-sm m-auto">Those are important in Vanue Management</h1>
      <hr class="border-b-2 border-primary w-8 m-auto my-6" />
      <div class="flex flex-wrap justify-between items-start">
        <div class="w-full sm:w-1/2 md:w-1/4 flex flex-col items-center justify-center p-4">
          <div class="w-14 h-14 rounded-full mr-4 bg-gray-300" alt></div>
          <h2 class="my-4 font-medium">Cras ornare tristique elit.</h2>
          <p
            class="leading-normal mb-4 text-gray-700"
          >Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 flex flex-col items-center justify-center p-4">
          <div class="w-14 h-14 rounded-full mr-4 bg-gray-300" alt></div>
          <h2 class="my-4 font-medium">Vivamus vestibulum ntulla nec ante.</h2>
          <p
            class="leading-normal mb-4 text-gray-700"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 flex flex-col items-center justify-center p-4">
          <div class="w-14 h-14 rounded-full mr-4 bg-gray-300" alt></div>
          <h2 class="my-4 font-medium">Praesent placerat risus quis eros.</h2>
          <p
            class="leading-normal mb-4 text-gray-700"
          >Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.</p>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 flex flex-col items-center justify-center p-4">
          <div class="w-14 h-14 rounded-full mr-4 bg-gray-300" alt></div>
          <h2 class="my-4 font-medium">Fusce pellentesque suscipit nibh.</h2>
          <p
            class="leading-normal mb-4 text-gray-700"
          >Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import MainCarousel from "~/components/MainCarousel.vue";

export default {
  metaInfo: {
    title: "Hello, world!"
  },
  components: {
    MainCarousel
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
