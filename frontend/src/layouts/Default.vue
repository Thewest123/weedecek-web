<template>
  <div>
    <slot/>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">

</style>
