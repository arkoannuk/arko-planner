<template>
  <div class="container-flex">
    <header class="bg-dark p-3">
      <NavBar />
    </header>
    <div class="container mt-3 text-center">
      <RouterView />
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue"

export default {
  components: { NavBar }
}
</script>

<style>
a {
  color: white;
}
.router-link-active {
  color: #0d6efd;
}
</style>
