<template>
  <Layout>
    <div>
      <h1 v-html="$page.product.Name" />
      <h2 v-html="$page.product.Price" />
      <div v-html="$page.product.Description" />

      <div>
          <h3>In categories</h3>
          <ul>
              <li v-for="cat in $page.product.categories" v-bind:key="cat.id">
                  <p v-html="cat.Name"/>
              </li>
          </ul>
      </div>

      <div>
          <h3>Pictures</h3>
          <ul>
              <li v-for="pic in $page.product.pictures" v-bind:key="pic.id">
                  <p v-html="pic.id"/>
                  <img :src="`${strapi_url}${pic.url}`" width="200px"/>
              </li>
          </ul>
      </div>
    </div>
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