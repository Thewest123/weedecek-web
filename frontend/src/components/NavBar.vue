<template>
  <nav>
    <el-menu
      :default-active="$route.path"
      :router="true"
      mode="horizontal"
      background-color="#36B572"
      text-color="#ccc"
      active-text-color="#fff"
    >
      <el-menu-item index="/">Home</el-menu-item>
      <el-menu-item index="/shop/">Shop</el-menu-item>
      <el-menu-item index="/about/">About</el-menu-item>
    </el-menu>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>