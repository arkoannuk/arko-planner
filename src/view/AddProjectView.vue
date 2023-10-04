<template>
  <div>
    <h1>Add Project</h1>
    <form class="text-start mt-3" @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label class="form-label">Project Name</label>
        <input type="text" class="form-control" v-model="title" required />
      </div>
      <div class="mb-3">
        <label class="form-label">Details</label>
        <textarea class="form-control" rows="3" v-model="details" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Add Project</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      details: ""
    }
  },
  methods: {
    handleSubmit() {
      let project = {
        title: this.title,
        details: this.details,
        complete: false
      }

      fetch("http://localhost:3000/projects/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(project)
      })
        .then(() => {
          this.$router.push("/")
        })
        .catch((err) => console.log(err))
    }
  }
}
</script>
