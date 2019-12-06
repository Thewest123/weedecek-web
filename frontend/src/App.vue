<template>
  <div class="flex flex-col h-full min-h-screen">
    <header>
      <NavBar />
    </header>
    <main class="flex-1">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default {
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$static.metadata.siteDescription
        }
      ]
    };
  },
  components: {
    NavBar,
    Footer
  }
};
</script>