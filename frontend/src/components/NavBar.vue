<template>
  <!-- <nav>
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
  </nav>-->

  <nav
    class="font-sans bg-white text-center flex justify-between items-center my-4 mx-auto container overflow-hidden text-primary"
  >
    <a href="/">
      <g-image src="~/assets/images/logo-dark.png" class="h-10 w-auto" alt="logo" />
    </a>
    <ul class="text-sm list-none p-0 flex items-center">
      <li>
        <g-link to="/" class="inline-block py-2 px-3 text-gray-900 hover:text-primary no-underline">Home</g-link>
      </li>
      <li>
        <g-link to="/shop/" class="inline-block py-2 px-3 text-gray-900 hover:text-primary no-underline">Shop</g-link>
      </li>
      <li>
        <g-link to="/about/" class="inline-block py-2 px-3 text-gray-900 hover:text-primary no-underline">About</g-link>
      </li>
    </ul>
    <ul class="text-sm text-primary list-none p-0 flex items-center">
      <li>
        <a
          href="#"
          class="inline-block py-2 px-3 text-gray-900 hover:text-primary no-underline"
        >Log In</a>
      </li>
      <li>
        <button class="bg-gray-900 hover:bg-primary text-white ml-4 py-2 px-3">Sign Up</button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {

};
</script>

<style>
</style>