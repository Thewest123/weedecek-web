<template>
  <Layout>
    <h1>Shop</h1>
    <!-- <p v-for="edge in $page.products.edges" :key="edge.product.id">{{edge.product.Name}}</p> -->
    <ProductCard v-for="edge in $page.products.edges" :key="edge.product.id" :product="edge.product"/>
  </Layout>
</template>

<script>
import ProductCard from '~/components/ProductCard'

export default {
  metaInfo: {
    title: 'Shop'
  },
  components: {
    ProductCard
  }
}
</script>

<page-query>
query AllProducts {
  products: allStrapiProduct {
    edges {
      product: node {
        id,
        Name,
        Price
        Description,
        pictures {
          id,
          url
        }
      }
    }    
  }
}
</page-query>
