<template>
  <div>
    <!-- <h2>{{product.Name}}</h2>
    <p>${{product.Price}}</p>
    <p>{{product.Description}}</p>
    <g-link :to="product.path">View More</g-link>
    <br />
    <img
      v-if="product.pictures.length > 0"
      :src="strapi_url + product.pictures[0].url"
      width="200px"
    />
    <br />-->

    <el-card :body-style="{ padding: '0px' }">
      <img
        v-if="product.pictures.length > 0"
        :src="strapi_url + product.pictures[0].url"
        class="image"
      />
      <div style="padding: 14px;">
        <span>{{ product.Name }}</span>
        <div class="bottom clearfix">
          <time class="price">{{ product.Price }}</time>
          <el-button type="text" class="button">
            <g-link :to="product.path">View More</g-link>
          </el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  props: ["product"],
  data() {
    return {
      strapi_url: ""
    }
  },
  async mounted() {
    this.strapi_url = process.env.GRIDSOME_STRAPI_URL;
  }
};
</script>

<style lang="scss" scoped>
.price {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>