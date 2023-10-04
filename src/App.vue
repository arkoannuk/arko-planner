<template>
  <div class="container-flex">
    <header class="bg-dark p-3">
      <nav class="d-flex justify-content-center gap-5">
        <RouterLink to="/">Home</RouterLink>
        <br />
        <RouterLink :to="{ name: 'about' }">About</RouterLink>
        <br />
        <RouterLink :to="{ name: 'jobs' }">Jobs</RouterLink>
      </nav>
    </header>

    <button @click="redirect">Redirect</button>
    <button @click="back">Go back</button>
    <button @click="forward">Go forward</button>

    <div class="container mt-3 text-center">
      <RouterView />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    redirect() {
      this.$router.push({ name: 'home' })
    },
    back() {
      this.$router.go(-1)
    },
    forward() {
      this.$router.go(1)
    }
  }
}
</script>

<style>
.router-link-active {
  color: red;
}
</style>
