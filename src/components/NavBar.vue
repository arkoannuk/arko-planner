<template>
  <nav class="d-flex justify-content-center gap-5">
    <RouterLink to="/" class="text-decoration-none">Home</RouterLink>
    <RouterLink :to="{ name: 'AddProject' }" class="text-decoration-none"
      >Add a New Project</RouterLink
    >
  </nav>
</template>
