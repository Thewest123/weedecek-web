<template>
  <section class="bg-gray-900 py-4 font-sans">
    <div
      class="container m-auto max-w-xl flex items-baseline justify-start border-b-2 border-gray-200 mb-4"
    >
      <h2
        class="text-primary text-base font-bold tracking-wide uppercase py-4 px-6 border-b-2 border-primary -mb-4"
      >All</h2>
      <h2
        v-for="edge in $static.categories.edges"
        :key="edge.category.id"
        class="text-gray-200 text-base font-bold tracking-wide uppercase py-4 px-6"
      >{{edge.category.Name}}</h2>
    </div>
  </section>
</template>

<static-query>
query AllProducts {
  categories: allStrapiCategory (sortBy: "id", order: ASC){
    edges {
      category: node {
		id,
        Name
      }
    }    
  }
}
</static-query>

<script>
export default {};
</script>

<style>
</style>