<template>
  <Layout>
    <h1>Shop</h1>

    <el-row>
      <el-col :span="8" v-for="(edge, index) in $page.products.edges" :key="edge.product.id" :offset="index > 0 ? 2 : 0">
        <ProductCard :product="edge.product" />
      </el-col>
    </el-row>
  </Layout>
</template>

<script>
import ProductCard from "~/components/ProductCard";

export default {
  metaInfo: {
    title: "Shop"
  },
  components: {
    ProductCard
  }
};
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
        },
        path
      }
    }    
  }
}
</page-query>
