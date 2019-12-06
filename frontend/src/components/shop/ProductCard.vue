<template>
  <div class="w-full md:w-1/2 lg:w-1/3 flex flex-col mb-8 px-3">
    <div class="overflow-hidden bg-white rounded-lg shadow-lg">
      <img class="w-full" :src="strapi_url + product.pictures[0].url" :alt="product.Name" />
      <div class="p-6 flex flex-col justify-between">
        <div class="relative px-6 pb-6 mt-6">
          <span class="block text-gray-600 mb-4 -mt-8">
            <span class="inline-block" v-for="(category, index) in product.categories" :key="category.id">
              {{category.Name}}
              <span v-if="product.categories.length > 0 && index < product.categories.length-1">/&nbsp;</span>
            </span>
          </span>
          <div class="flex justify-between -mb-4">
            <span class="block font-semibold text-xl text-primary"><g-link :to="product.path" class="hover:text-gray-700">{{ product.Name }}</g-link></span>
            <span class="block bg-primary rounded-full text-white font-bold px-3 py-2 leading-none flex items-center">$ {{ product.Price }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  data() {
    return {
      strapi_url: ""
    };
  },
  async mounted() {
    this.strapi_url = process.env.GRIDSOME_STRAPI_URL;
  }
};
</script>

<style lang="scss" scoped>
</style>