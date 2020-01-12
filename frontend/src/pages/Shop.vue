<template>
  <Layout>
    <category-selector/>
    <section class="bg-gray-300 py-8 h-full px-8">

      <masonry
        :cols="{default: 3, 1000: 2, 700: 1}"
        :gutter="{default: '2rem'}"
        >
        <product-card
          v-for="edge in $page.products.edges"
          :key="edge.product.id"
          :product="edge.product"
        />
      </masonry>

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
  products: allStrapiProduct (sortBy: "id", order: ASC) {
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
