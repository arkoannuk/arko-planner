<template>
  <div>
    <h1>Edit Project</h1>
    <form class="text-start mt-3" @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label class="form-label">Project Name</label>
        <input type="text" class="form-control" v-model="title" required />
      </div>
      <div class="mb-3">
        <label class="form-label">Details</label>
        <textarea class="form-control" rows="3" v-model="details" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Update Project</button>
    </form>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      title: "",
      details: "",
      uri: "http://localhost:3000/projects/" + this.id
    }
  },
  mounted() {
    fetch(this.uri)
      .then((res) => res.json())
      .then((data) => {
        this.title = data.title
        this.details = data.details
      })
      .catch((err) => console.log(err))
  },
  methods: {
    handleSubmit() {
      fetch(this.uri, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: this.title,
          details: this.details,
          complete: false
        })
      })
        .then(() => {
          this.$router.push("/")
        })
        .catch((err) => console.log(err))
    }
  }
}
</script>
