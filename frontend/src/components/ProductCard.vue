<template>
    <div>
        <h2>{{product.Name}}</h2>
        <p>${{product.Price}}</p>
        <p>{{product.Description}}</p>
        <g-link :to="`/product/${product.id}`">LINK</g-link>
        <br>
        <img v-if="product.pictures.length > 0" :src="strapi_url + product.pictures[0].url" width="200px">
        <br>   
    </div>
</template>

<script>
export default {
    props: ["product"],
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

<style>

</style>