<template>
  <Layout>
    <category-selector/>
    <section class="bg-gray-300 py-4 h-full">
      <div class="m-10 flex flex-wrap items-start justify-start">
        <product-card
          v-for="edge in $page.products.edges"
          :key="edge.product.id"
          :product="edge.product"
        />
      </div>
    </section>
  </Layout>
</template>

<script>
import ProductCard from "~/components/shop/ProductCard";
import CategorySelector from "~/components/shop/CategorySelector";

export default {
  metaInfo: {
    title: "Shop"
  },
  components: {
    ProductCard,
    CategorySelector
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
        categories {
          id,
          Name
        },
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
