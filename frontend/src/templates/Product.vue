<template>
  <Layout>
    <section class="w-full font-sans container m-auto py-8">
      <h1>NAME: {{$page.product.Name}}</h1>
      <h2>PRICE: {{$page.product.Price}}</h2>
      <div>DESC: <p>{{$page.product.Description}}</p></div>

      <br>
      <div>
          <h3>IN CATEGORIES:</h3>
          <ul>
              <li v-for="cat in $page.product.categories" v-bind:key="cat.id">
                  <p>- {{cat.Name}}</p>
              </li>
          </ul>
      </div>

      <br>
      <div>
          <h3>PICTURES:</h3>
          <ul>
              <li v-for="pic in $page.product.pictures" v-bind:key="pic.id">
                  <img :src="`${strapi_url}${pic.url}`" width="200px"/>
                  <br>
              </li>
          </ul>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.product.Name
    }
  },
  data () {
    return {
      strapi_url: ""
    }
  },
  async mounted () {
    this.strapi_url = process.env.GRIDSOME_STRAPI_URL 
  }
}
</script>

<page-query>
query Product ($id: ID!) {
  product: strapiProduct (id: $id) {
    Name,
    Price
    Description,
    categories {
      id,
      Name
    },
    pictures {
      id,
      url
    }
  }
}
</page-query>

<style>

</style>