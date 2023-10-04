<template>
  <h1>Jobs</h1>
  <div v-if="jobs.length">
    <div v-for="job in jobs" :key="job.id">
      <RouterLink :to="{ name: 'JobDetails', params: { id: job.id } }">
        <button type="button" class="btn btn-light border-secondary border-1 w-50 my-1">
          {{ job.title }}
        </button>
      </RouterLink>
    </div>
  </div>
  <div v-else>Loading jobs...</div>
</template>

<script>
export default {
  data() {
    return {
      jobs: []
    }
  },
  mounted() {
    fetch('http://localhost:3000/jobs')
      .then((res) => res.json())
      .then((data) => (this.jobs = data))
      .catch((err) => console.log(err.message))
  }
}
</script>

<style></style>
